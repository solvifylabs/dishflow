"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";

const screens = [
  {
    label: "Dashboard",
    description: "Vista general con todos los pedidos activos, estados y montos en tiempo real.",
    file: "/screenshots/dashboard.png",
  },
  {
    label: "Wizard de pedido",
    description: "Flujo guiado paso a paso para tomar pedidos sin errores ni confusiones.",
    file: "/screenshots/wizard.png",
  },
  {
    label: "Historial",
    description: "Todos los pedidos cerrados con detalle, montos y métodos de pago.",
    file: "/screenshots/historial.png",
  },
  {
    label: "Menú",
    description: "Gestioná productos, categorías, precios y disponibilidad desde un solo lugar.",
    file: "/screenshots/menu.png",
  },
  {
    label: "Rendimiento",
    description: "Métricas de ventas, ticket promedio y productos más pedidos del período.",
    file: "/screenshots/rendimiento.png",
  },
  {
    label: "Clientes",
    description: "Registro de clientes con historial de pedidos, direcciones y preferencias.",
    file: "/screenshots/clientes.png",
  },
];

export function Preview() {
  const [active, setActive] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(new Set());

  const markLoaded = useCallback((i: number) => {
    setLoadedSet(prev => new Set(prev).add(i));
  }, []);

  return (
    <section className="py-32 bg-[#0e0e10] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8A049] mb-4">
            Interfaz
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Diseñado para la velocidad
          </h2>
          <p className="text-[#fafafa]/50 text-lg max-w-xl mx-auto">
            Oscuro, limpio y sin distracciones. Pensado para el mostrador, con luz baja y ritmo alto.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                active === i
                  ? "text-[#fafafa]"
                  : "text-[#fafafa]/40 hover:text-[#fafafa]/70"
              }`}
            >
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 rounded-full bg-[#E8A049]/15 border border-[#E8A049]/25"
                  />
                )}
              </AnimatePresence>
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl border border-white/[0.07] bg-[#111113] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
        >
          {/* Window chrome — decorativo */}
          <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/[0.05] bg-[#0e0e10]/60">
            <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
            <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
            <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
            <span className="ml-3 text-xs text-[#fafafa]/20">{screens[active].label}</span>
          </div>

          {/* Screenshot */}
          <div className="relative overflow-hidden aspect-4/3 bg-[#111113]">
            <AnimatePresence>
              {!loadedSet.has(active) && (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 z-10 bg-[#1a1a1c] animate-pulse"
                />
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: loadedSet.has(active) ? 1 : 0,
                  y: loadedSet.has(active) ? 0 : 8,
                }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={screens[active].file}
                  alt={screens[active].label}
                  fill
                  className="object-cover"
                  priority={active === 0}
                  onLoad={() => markLoaded(active)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <div className="mt-6 text-center h-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-[#fafafa]/40"
            >
              {screens[active].description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
