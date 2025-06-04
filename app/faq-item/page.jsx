import FaqItem from "@/components/FaqItem";

export default function FaqDemo() {
  const faqs = [
    {
      question: "Apa itu Next.js?",
      answer: "Next.js adalah framework React untuk membuat aplikasi web yang cepat dan modern.",
    },
    {
      question: "Apa fungsi Tailwind CSS?",
      answer: "Tailwind CSS adalah framework utility-first untuk mempercepat pembuatan antarmuka UI.",
    },
    {
      question: "Apakah bisa digunakan untuk mobile?",
      answer: "Ya! Dengan responsif Tailwind, UI-nya bisa disesuaikan untuk mobile, tablet, dan desktop.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">❓ FAQ - Pertanyaan Umum</h1>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <FaqItem key={i} {...faq} />
        ))}
      </div>
    </div>
  );
}
