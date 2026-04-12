"use client";

import { motion } from "framer-motion";

export default function ONG() {
  return (
    <section id="ong" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Organizations & Initiatives</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Collaborating with organizations to make an impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl overflow-hidden"
        >
          <img
            src="/ong-image.png"
            alt="ONG Organizations"
            className="w-full h-auto rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
