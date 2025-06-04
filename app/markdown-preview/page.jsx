// File: app/markdown-preview/page.jsx
import MarkdownPreview from "@/components/MarkdownPreview";

export default function MarkdownPreviewPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Markdown Preview</h1>
      <MarkdownPreview />
    </div>
  );
}