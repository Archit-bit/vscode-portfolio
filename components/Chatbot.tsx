"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I am Archit’s Butler, aka Ramu Kaka 🤵‍♂️ How may I serve you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    // placeholder response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `Ramu Kaka at your service! You said: "${input}". Soon I'll fetch real answers from Archit’s database 🚀`,
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg"
      >
        <Bot size={24} />
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-[#1e1e2e]/90 backdrop-blur-md border border-purple-500 rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-purple-600 text-white text-sm">
              <span>🤵 Archit’s Butler — Ramu Kaka</span>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-purple-500/20 text-purple-200 self-start"
                      : "bg-gray-700/50 text-gray-100 self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex p-2 border-t border-purple-500"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Ramu Kaka..."
                className="flex-1 bg-transparent text-gray-100 outline-none px-2"
              />
              <button
                type="submit"
                className="text-purple-400 hover:text-purple-200 px-2"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
