"use client";

import { useEffect, useState, useRef } from "react";

interface Message {
  message: string;
}

const EventsPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    // Initialize the EventSource when the component mounts
    const startEventSource = () => {
      const eventSource = new EventSource("/api/events");
      eventSourceRef.current = eventSource;

      eventSource.onmessage = function (event) {
        if (!isPaused) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const newMessage: Message = JSON.parse(String(event.data));
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      };

      eventSource.onerror = function () {
        eventSource.close();
      };
    };

    startEventSource();

    // Clean up the EventSource when the component unmounts
    return () => {
      eventSourceRef.current?.close();
    };
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleUnpause = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    eventSourceRef.current?.close();
    eventSourceRef.current = null;
    setMessages([]);
  };

  return (
    <div>
      <h1>Server-Sent Events in Next.js with App Router</h1>
      <div>
        <button
          onClick={handlePause}
          disabled={isPaused || !eventSourceRef.current}
        >
          Pause
        </button>
        <button
          onClick={handleUnpause}
          disabled={!isPaused || !eventSourceRef.current}
        >
          Unpause
        </button>
        <button onClick={handleStop} disabled={!eventSourceRef.current}>
          Stop
        </button>
      </div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
