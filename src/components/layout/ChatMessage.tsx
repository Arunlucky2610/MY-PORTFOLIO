"use client";

import { motion } from "framer-motion";

interface ChatMessageProps {
  message: {
    text: string;
    sender: "user" | "bot";
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isBot
            ? "bg-gradient-to-r from-purple-600/40 to-blue-600/40 text-white border border-purple-500/30"
            : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
}
