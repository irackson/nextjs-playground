import { registerOTel } from "@vercel/otel";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";

export function register() {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);
  registerOTel({
    serviceName: "nextjs-playground",
    // traceExporter: {
    //   async export(spans, resultCallback): Promise<void> {
    //     const errorSpan = spans.find(
    //       (span) => span.events[0]?.attributes?.["exception.type"] === "Error",
    //     );
    //     if (!errorSpan) {
    //       resultCallback({ code: 0 });
    //     } else {
    //       const messages = `[${new Date(errorSpan.startTime[0] * 1000).toISOString()} - ${errorSpan.spanContext().traceId}] ${errorSpan.name}: ${typeof errorSpan.events[0]?.attributes?.["exception.message"] === "string" ? errorSpan.events[0]?.attributes?.["exception.message"] : errorSpan.status.message ?? "OK"}`;

    //       try {
    //         await fetch(
    //           "https://hooks.slack.com/services/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",
    //           {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ text: messages }),
    //           },
    //         );
    //         resultCallback({ code: 0 });
    //       } catch (error: unknown) {
    //         console.error("Error sending trace to Slack:", error);
    //         resultCallback({ code: 1, error: error as Error }); // Indicate failure
    //       }
    //     }
    //   },
    //   shutdown(): Promise<void> {
    //     return Promise.resolve();
    //   },

    //   forceFlush(): Promise<void> {
    //     return Promise.resolve();
    //   },
    // },
  });
}
