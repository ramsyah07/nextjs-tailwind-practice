"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";

export default function FaqItem({ question, answer}) {
    const[isOpen, setIsOpen] = useState(false);


  return (
    <div className="border rounded-md p-4 mb-3 bg-white shadow-sm">
      <button className="flex justify-between items-center w-full text-left"
      onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <p className="text-gray-600 mt-3 transition-all duration-300">{answer}</p>
      )}
    </div>
  );
}
