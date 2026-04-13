"use client";

import { motion } from "framer-motion";

interface ChatSuggestionsProps {
  onSelect: (text: string) => void;
}

export default function ChatSuggestions({ onSelect }: ChatSuggestionsProps) {
  const suggestions = [
    { text: "View Projects 🚀", emoji: "🚀" },
    { text: "See Skills 💪", emoji: "💪" },
    { text: "Contact Arun 🤝", emoji: "🤝" },
  ];

  return (
    <div className="px-4 pb-2 space-y-2">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
          onClick={() => onSelect(suggestion.text)}
          className="w-full text-left text-xs text-gray-300 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 rounded-lg px-3 py-2 transition-all"
        >
          {suggestion.text}
        </motion.button>
      ))}
    </div>
  );
}
