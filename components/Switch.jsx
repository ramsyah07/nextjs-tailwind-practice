"use client";
export default function Switch({ enabled, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-14 h-8 flex items-center rounded-full px-1 cursor-pointer transition ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow transform transition ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
