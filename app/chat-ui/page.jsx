"use client";
import { useState, useRef, useEffect } from "react";

export default function SmartChatUI() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Saya siap membantu menjawab berbagai pertanyaan Anda. Silakan tanya apa saja!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  // AI Response Logic
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Salam dan sapaan
    if (input.includes("halo") || input.includes("hai") || input.includes("hello")) {
      return "Halo juga! Senang bertemu dengan Anda. Ada yang bisa saya bantu hari ini?";
    }
    
    // Pertanyaan tentang waktu
    if (input.includes("jam") || input.includes("waktu")) {
      const now = new Date();
      return `Sekarang jam ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} WIB.`;
    }
    
    // Pertanyaan tentang cuaca
    if (input.includes("cuaca") || input.includes("hujan") || input.includes("panas")) {
      const weatherResponses = [
        "Maaf, saya tidak memiliki akses real-time ke data cuaca. Coba cek aplikasi cuaca atau website BMKG ya!",
        "Untuk informasi cuaca terkini, saya sarankan cek Google Weather atau aplikasi cuaca di ponsel Anda.",
      ];
      return weatherResponses[Math.floor(Math.random() * weatherResponses.length)];
    }
    
    // Pertanyaan tentang teknologi
    if (input.includes("programming") || input.includes("koding") || input.includes("javascript") || input.includes("react")) {
      return "Saya bisa membantu dengan pertanyaan programming! JavaScript dan React adalah teknologi yang powerful untuk web development. Ada yang spesifik ingin ditanyakan?";
    }
    
    // Pertanyaan tentang kesehatan
    if (input.includes("sakit") || input.includes("sehat") || input.includes("obat")) {
      return "Untuk masalah kesehatan, saya sarankan konsultasi dengan dokter atau tenaga medis profesional. Kesehatan adalah hal yang penting dan perlu penanganan yang tepat.";
    }
    
    // Pertanyaan tentang makanan
    if (input.includes("makanan") || input.includes("makan") || input.includes("resep")) {
      const foodResponses = [
        "Makanan Indonesia sangat beragam dan lezat! Ada nasi gudeg, rendang, sate, gado-gado, dan masih banyak lagi. Apa makanan favorit Anda?",
        "Untuk resep masakan, saya bisa memberikan saran umum. Makanan apa yang ingin Anda buat?",
      ];
      return foodResponses[Math.floor(Math.random() * foodResponses.length)];
    }
    
    // Pertanyaan tentang belajar
    if (input.includes("belajar") || input.includes("sekolah") || input.includes("kuliah")) {
      return "Belajar adalah investasi terbaik! Konsistensi dan praktik adalah kunci sukses. Apa yang sedang Anda pelajari saat ini?";
    }
    
    // Pertanyaan tentang hobi
    if (input.includes("hobi") || input.includes("musik") || input.includes("film") || input.includes("buku")) {
      return "Hobi adalah hal yang menyenangkan! Musik, film, dan buku bisa menjadi sumber inspirasi dan hiburan. Ceritakan tentang hobi Anda dong!";
    }
    
    // Pertanyaan matematika sederhana
    if (input.includes("+") || input.includes("-") || input.includes("*") || input.includes("/")) {
      try {
        // Simple math evaluation (hanya untuk operasi dasar)
        const mathExpression = input.match(/[\d+\-*/\s()]+/g);
        if (mathExpression && mathExpression[0]) {
          const result = Function('"use strict"; return (' + mathExpression[0] + ')')();
          return `Hasil perhitungan: ${mathExpression[0]} = ${result}`;
        }
      } catch (e) {
        return "Maaf, saya tidak bisa menghitung ekspresi matematika yang kompleks. Coba gunakan kalkulator untuk perhitungan yang rumit.";
      }
    }
    
    // Pertanyaan tentang Indonesia
    if (input.includes("indonesia") || input.includes("jakarta") || input.includes("bali")) {
      return "Indonesia adalah negara yang indah dengan kekayaan budaya, alam, dan kuliner yang luar biasa! Ada 17.000+ pulau dengan keberagaman yang menakjubkan. Apa yang ingin Anda ketahui tentang Indonesia?";
    }
    
    // Pertanyaan motivasi
    if (input.includes("motivasi") || input.includes("semangat") || input.includes("sedih")) {
      const motivationalResponses = [
        "Ingatlah bahwa setiap tantangan adalah kesempatan untuk tumbuh. Anda lebih kuat dari yang Anda kira! 💪",
        "Hari yang sulit tidak berlangsung selamanya, tapi orang yang kuat akan bertahan. Tetap semangat!",
        "Kesuksesan bukan tentang tidak pernah jatuh, tapi tentang bangkit setiap kali terjatuh. You got this! ✨",
      ];
      return motivationalResponses[Math.floor(Math.random() * motivationalResponses.length)];
    }
    
    // Pertanyaan umum lainnya
    const generalResponses = [
      "Itu pertanyaan yang menarik! Bisa Anda jelaskan lebih detail apa yang ingin Anda ketahui?",
      "Hmm, saya akan coba bantu sebaik mungkin. Bisakah Anda berikan konteks lebih lanjut?",
      "Pertanyaan yang bagus! Saya akan berusaha memberikan jawaban yang membantu berdasarkan pengetahuan saya.",
      "Saya mengerti apa yang Anda tanyakan. Mari kita bahas lebih dalam tentang hal ini.",
      "Terima kasih atas pertanyaannya! Saya akan coba jawab berdasarkan informasi yang saya miliki.",
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  const sendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages(prev => [...prev, { sender: "user", text: input }]);
      const userInput = input;
      setInput("");
      
      // Show typing indicator
      setIsTyping(true);
      
      // Generate AI response after delay
      setTimeout(() => {
        const response = generateResponse(userInput);
        setMessages(prev => [...prev, { sender: "bot", text: response }]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-gray-800">🤖 Smart Chat Assistant</h1>
        <p className="text-sm text-gray-600">Tanya apa saja, saya siap membantu!</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-96">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-sm ${
                m.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm border"
              }`}
            >
              <p className="text-sm">{m.text}</p>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm border shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={chatRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ketik pertanyaan Anda di sini..."
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            disabled={isTyping || !input.trim()}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isTyping || !input.trim()
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            {isTyping ? "..." : "Kirim"}
          </button>
        </div>
        
        {/* Quick Suggestions */}
        <div className="mt-3 flex flex-wrap gap-2">
          {["Apa kabar?", "Jam berapa sekarang?", "Ceritakan tentang Indonesia", "Motivasi dong!"].map((suggestion, i) => (
            <button
              key={i}
              onClick={() => setInput(suggestion)}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              disabled={isTyping}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
