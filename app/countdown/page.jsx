"use client";
import { useState, useEffect } from "react";

export default function CountdownDemo() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-3xl">
      ⏳ {seconds > 0 ? seconds : "Waktu Habis!"}
    </div>
  );
}
