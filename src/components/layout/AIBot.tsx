"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AIBot() {
  const [isVisible, setIsVisible] = useState(true);

  const botVariants = {
    initial: { 
      y: -100, 
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bubbleVariants = {
    initial: { 
      x: -30, 
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
        delay: 1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-8"
      variants={botVariants}
      initial="initial"
      animate="animate"
    >
      {/* Speech Bubble */}
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="relative"
      >
        <motion.div
          className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-3xl px-8 py-5 shadow-2xl backdrop-blur-md border border-purple-400/50 max-w-xs"
          animate={{
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.3)",
              "0 0 40px rgba(99, 102, 241, 0.5)",
              "0 0 20px rgba(139, 92, 246, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-lg font-semibold flex flex-wrap"
          >
            {"Hi buddy, this is Arun!".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Tail */}
        <motion.div
          className="absolute -bottom-3 right-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* AI Bot Full Character */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="relative group cursor-pointer w-32 flex justify-center"
      >
        {/* Outer glow */}
        <motion.div
          className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-30 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Main container */}
        <div className="relative flex flex-col items-center">
          
          {/* HEAD */}
          <motion.div
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-xl border-2 border-cyan-300/50 flex items-center justify-center"
            whileHover={{
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(99, 102, 241, 0.5)"
            }}
            animate={{
              rotateZ: [-2, 2, -2]
            }}
            transition={{ rotate: { duration: 2, repeat: Infinity } }}
          >
            {/* Head glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-300/30 to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Eyes */}
            <div className="absolute flex gap-2 top-4">
              <motion.div
                className="w-2 h-2 bg-white rounded-full shadow-lg"
                animate={{ scale: [1, 0.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full shadow-lg"
                animate={{ scale: [1, 0.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
            </div>

            {/* Mouth */}
            <motion.svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              className="absolute bottom-2"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path
                d="M1 1 Q4 3 7 1"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Antenna */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
              animate={{ 
                rotate: [-15, 15, -15],
                scaleY: [1, 1.15, 1]
              }}
              transition={{ rotate: { duration: 2.5, repeat: Infinity }, scaleY: { duration: 1.5, repeat: Infinity } }}
            />

            {/* Pulse */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{ scale: [1, 1.2], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* BODY */}
          <motion.div
            className="w-10 h-12 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-lg border-2 border-cyan-300/40 mt-1 relative shadow-lg"
            animate={{
              scaleY: [1, 0.95, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* Body chest light */}
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Left Arm */}
            <motion.div
              className="absolute -left-4 top-2 w-4 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              animate={{
                rotate: [-20, 30, -20],
                x: [-2, 2, -2]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {/* Left Hand */}
              <motion.div
                className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>

            {/* Right Arm */}
            <motion.div
              className="absolute -right-4 top-2 w-4 h-3 bg-gradient-to-l from-blue-500 to-cyan-400 rounded-full"
              animate={{
                rotate: [20, -30, 20],
                x: [2, -2, 2]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {/* Right Hand */}
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }}
              />
            </motion.div>
          </motion.div>

          {/* LEGS */}
          <div className="flex gap-2 mt-1">
            {/* Left Leg */}
            <motion.div
              className="w-2 h-5 bg-gradient-to-b from-indigo-600 to-purple-700 rounded-sm"
              animate={{
                rotateZ: [-5, 5, -5],
                y: [0, 2, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              {/* Left Foot */}
              <motion.div
                className="w-3 h-1 bg-cyan-400 rounded-full mx-auto mt-1"
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </motion.div>

            {/* Right Leg */}
            <motion.div
              className="w-2 h-5 bg-gradient-to-b from-indigo-600 to-purple-700 rounded-sm"
              animate={{
                rotateZ: [5, -5, 5],
                y: [0, 2, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            >
              {/* Right Foot */}
              <motion.div
                className="w-3 h-1 bg-cyan-400 rounded-full mx-auto mt-1"
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Close button */}
      <motion.button
        onClick={() => setIsVisible(false)}
        className="text-gray-500 hover:text-white transition-colors text-xs font-semibold"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        ✕ Close
      </motion.button>
    </motion.div>
  );
}
