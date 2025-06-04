"use client";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <button onClick={() => setOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-2">Hello from Modal</h2>
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  );
}
