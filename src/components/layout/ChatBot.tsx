"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatAvatar from "./ChatAvatar";
import ChatSuggestions from "./ChatSuggestions";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setTimeout(() => showGreeting(), 500);
    }
  }, [isOpen, hasGreeted]);

  const showGreeting = async () => {
    // Typing animation
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsTyping(false);

    // First message
    const msg1: Message = {
      id: "1",
      text: "Hey there! 👋\nWelcome to Arun's portfolio\n🤝 *virtual handshake* — nice to meet you!",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages([msg1]);

    // Second message
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsTyping(false);

    const msg2: Message = {
      id: "2",
      text: "I'll guide you around 😄\nArun builds modern web apps, data systems, and AI projects.",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, msg2]);

    // Third message
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsTyping(false);

    const msg3: Message = {
      id: "3",
      text: "Wanna explore something cool? 👀",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, msg3]);
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // User message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const botResponse = generateResponse(messageText);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMsg]);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("project") ||
      input.includes("work") ||
      input.includes("built")
    ) {
      return "Arun has worked on amazing projects! 🚀\nFrom AI/ML systems to full-stack web apps.\n\nWant to see what he's built? 👀";
    }

    if (
      input.includes("skill") ||
      input.includes("tech") ||
      input.includes("technology")
    ) {
      return "Arun's toolkit is impressive! 💪\nFull stack dev, AI/ML, data analytics, and more.\n\nInterested in a specific area? 🤔";
    }

    if (
      input.includes("about") ||
      input.includes("who") ||
      input.includes("background")
    ) {
      return "Great question! 😊\nArun's a Full Stack Developer passionate about AI & data.\n\nWant to know more about his journey? 🎯";
    }

    if (
      input.includes("contact") ||
      input.includes("reach") ||
      input.includes("connect")
    ) {
      return "I'll connect you with Arun! 🤝\nScroll to the contact section or click 'Contact' in the nav.\n\nWhat's on your mind? 💭";
    }

    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return "Yo! 👋 Great to see you here!\n\nWhat can I help you explore? 🌟";
    }

    return "That's interesting! 🤔\nWant to check out Arun's projects, skills, or get in touch? 😊";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-96 h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20 backdrop-blur-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <h3 className="text-white font-bold text-sm">Arun's AI Assistant</h3>
                  <p className="text-purple-200 text-xs">Always here to help</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                ✕
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <ChatAvatar isWaving={true} />
                    <p className="text-gray-400 text-sm mt-4">Chat started...</p>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Suggestions */}
            {messages.length > 2 && !isTyping && (
              <ChatSuggestions onSelect={handleSendMessage} />
            )}

            {/* Input */}
            <div className="border-t border-purple-500/20 p-4 gap-2 flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-700/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-purple-500/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSendMessage()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg hover:shadow-lg transition-all"
              >
                ➤
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:shadow-purple-500/50 hover:shadow-2xl transition-all border-2 border-purple-400/50 relative group"
      >
        {isOpen ? "✕" : "💬"}

        {/* Pulse animation */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-purple-500 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
}
