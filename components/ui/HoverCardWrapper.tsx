"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const HoverCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/80 rounded-3xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-20">{children}</div>
    </div>
  );
};
