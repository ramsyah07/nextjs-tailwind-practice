// File: components/MarkdownPreview.jsx
"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState("## Hello\n\nThis is a markdown preview");

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <textarea
        className="w-full h-60 p-3 border rounded"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className="w-full h-60 p-3 border rounded bg-white overflow-auto prose">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}