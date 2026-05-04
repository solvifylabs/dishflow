"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#0e0e10]/80"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.webp" alt="Dishflow" width={50} height={50} />
        </div>

        <a
          href="https://dishflow-demo.solvifylabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#fafafa]/70 hover:text-[#E8A049] transition-colors"
        >
          Ver demo
        </a>
      </div>
    </motion.header>
  );
}
