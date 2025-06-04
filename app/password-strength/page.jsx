"use client";
import { useState } from "react";

export default function PasswordStrengthDemo() {
  const [password, setPassword] = useState("");

  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    switch (score) {
      case 0:
      case 1:
        return { label: "Lemah", color: "red" };
      case 2:
        return { label: "Sedang", color: "orange" };
      case 3:
      case 4:
        return { label: "Kuat", color: "green" };
      default:
        return { label: "Lemah", color: "red" };
    }
  };

  const strength = getStrength(password);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">🔐 Password Strength Meter</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-1/2"
        placeholder="Masukkan password..."
      />
      {password && (
        <div className="mt-2">
          <span className={`text-${strength.color}-600 font-semibold`}>
            {strength.label}
          </span>
        </div>
      )}
    </div>
  );
}
