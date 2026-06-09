'use client';

import { motion } from 'motion/react';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen pt-20 lg:pt-[116px] flex flex-col"
    >
      <main className="flex-grow">
        {children}
      </main>
    </motion.div>
  );
}
