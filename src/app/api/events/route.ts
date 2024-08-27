import { type NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      const sendEvent = (data: object) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      // Send an initial message
      sendEvent({ message: "Connected to SSE" });

      // Example: Send an event every 5 seconds
      const intervalId = setInterval(() => {
        sendEvent({ message: "Hello, this is an event from the server!" });
      }, 5000);

      // Close the stream when the connection is closed
      req.signal.addEventListener("abort", () => {
        clearInterval(intervalId);
        controller.close();
      });
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
};
