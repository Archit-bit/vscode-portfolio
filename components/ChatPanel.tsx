"use client";

import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "🤖 I am Archit's Butler — Ramu Kaka. How may I assist you?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    const botMsg: Message = {
      sender: "bot",
      text: `Ramu Kaka received: "${input}" (I’ll get smarter soon 👀)`,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-gray-100">
      {/* Header */}
      <div className="h-10 flex items-center justify-between px-3 border-b border-[#333] bg-[#252526]">
        <div className="flex items-center space-x-2">
          <Bot className="text-purple-400" size={18} />
          <span className="text-sm font-medium">
            Archit's Butler — Ramu Kaka
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-200">
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md max-w-[75%] ${
              msg.sender === "user"
                ? "bg-purple-600 text-white self-end ml-auto"
                : "bg-[#2d2d30] text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center border-t border-[#333] bg-[#252526] p-2"
      >
        <input
          className="flex-1 bg-[#1e1e1e] rounded-md px-3 py-1 text-gray-100 placeholder-gray-500 outline-none"
          placeholder="Ask Ramu Kaka..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 p-2 rounded-md bg-purple-600 hover:bg-purple-500"
        >
          <Send size={16} className="text-white" />
        </button>
      </form>
    </div>
  );
}
