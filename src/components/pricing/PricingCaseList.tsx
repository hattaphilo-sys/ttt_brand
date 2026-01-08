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
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-xs tracking-widest text-text-primary/60 font-serif">{item.caseName}</span>
                  <span className="hidden md:inline text-mist text-[10px]">/</span>
                  <p className="text-sm text-text-muted">{item.clientAttribute}</p>
                </div>
                <h3 className="mt-1 font-serif text-lg md:text-xl text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted font-serif">{item.price}</p>
              </div>
              <div className="text-text-primary text-lg">
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
                  <div className="border-t border-white/10 pt-4 space-y-6">
                    <div>
                      <h4 className="text-xs tracking-widest text-text-muted mb-2 font-serif">CONCEPT</h4>
                      <p className="text-sm leading-loose text-text-primary/90">
                        {item.concept}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest text-text-muted mb-2 font-serif">SPEC</h4>
                      <p className="text-sm text-text-primary/90">
                        {item.spec}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest text-text-muted mb-2 font-serif">PRICE (6 months)</h4>
                      <p className="text-sm text-text-primary/90 font-serif">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
