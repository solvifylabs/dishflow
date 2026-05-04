"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0e10] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.webp" alt="Solvify Burger" width={50} height={50} />
        </div>
        <p className="text-xs text-[#fafafa]/30">
          www.solvifylabs.com · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
