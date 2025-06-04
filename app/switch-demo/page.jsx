"use client";
import { useState } from "react";
import Switch from "@/components/Switch";

export default function SwitchDemo() {
  const [on, setOn] = useState(false);

  return (
    <div className="min-h-screen p-8">
      <Switch enabled={on} onToggle={() => setOn(!on)} />
      <p className="mt-4">Status: {on ? "Aktif ✅" : "Nonaktif ❌"}</p>
    </div>
  );
}
