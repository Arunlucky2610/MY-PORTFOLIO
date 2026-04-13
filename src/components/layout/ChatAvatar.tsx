"use client";

import { motion } from "framer-motion";

interface ChatAvatarProps {
  isWaving?: boolean;
}

export default function ChatAvatar({ isWaving = false }: ChatAvatarProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg relative group"
    >
      {/* Outer glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20"
      />

      {/* Avatar content */}
      <motion.div
        animate={isWaving ? { rotate: [0, 14, 0] } : { rotate: [-2, 2, -2] }}
        transition={{
          duration: isWaving ? 0.6 : 2,
          repeat: Infinity,
          repeatDelay: isWaving ? 2 : 0,
        }}
        style={{ transformOrigin: "70% 30%" }}
        className="text-xl"
      >
        {isWaving ? "👋" : "🤖"}
      </motion.div>
    </motion.div>
  );
}
