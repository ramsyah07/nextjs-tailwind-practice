// File: components/StepperForm.jsx
"use client";
import { useState } from "react";

const steps = ["Identitas", "Alamat", "Konfirmasi"];

export default function StepperForm() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        {steps.map((label, i) => (
          <div
            key={i}
            className={`px-4 py-2 border-b-4 text-sm font-medium ${
              i === step ? "border-blue-600 text-blue-600" : "border-gray-200 text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="p-4 border rounded bg-white">
        <p className="text-gray-700 text-sm">Step {step + 1}: {steps[step]}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={prev} disabled={step === 0} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
          Kembali
        </button>
        <button onClick={next} disabled={step === steps.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded">
          Lanjut
        </button>
      </div>
    </div>
  );
}