"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PricingCase } from '@/types/content';

type Props = { cases: PricingCase[] };

export default function PricingCaseList({ cases }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {cases.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            layout
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className={`w-full text-left bg-depth border rounded-lg px-6 py-5 cursor-pointer transition-colors ${
              isOpen ? 'border-white/20' : 'border-mist'
            } hover:border-white/20`}
          >
            <motion.div layout="position" className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-text-muted">{item.clientAttribute}</p>
                <h3 className="mt-1 font-serif text-xl md:text-2xl text-text-primary">{item.catchCopy}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.summary}</p>
              </div>
              <div className="text-text-primary text-xl">
                {isOpen ? '−' : '+'}
              </div>
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm leading-relaxed text-text-primary/90 border-t border-white/10 pt-4">
                    {item.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
