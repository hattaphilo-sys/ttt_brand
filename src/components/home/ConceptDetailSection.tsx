"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { ConceptDetailContent } from '@/types/section';

type Props = {
  content: ConceptDetailContent;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: [0.2, 0.8, 0.2, 1] as const }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ConceptDetailSection({ content }: Props) {
  const bodyParts = content.body.split('\n\n');

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-serif text-text-primary mb-8 whitespace-pre-line leading-relaxed"
          >
            {content.heading}
          </motion.h2>
        </motion.div>

        <div className="space-y-16 text-center">
          {/* Intro Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={itemVariants}
            className="text-text-muted leading-loose font-serif"
          >
            {bodyParts.map((part, i) => (
              <p key={i} className="mb-6 last:mb-0 whitespace-pre-line">
                {part}
              </p>
            ))}
          </motion.div>

          {/* 2-Column List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-md mx-auto"
          >
            <p className="text-text-muted mb-8 font-serif">これら全てを、私はあなたに求めません。</p>
            <motion.ul 
              variants={listVariants}
              className="grid grid-cols-2 gap-x-8 gap-y-4 text-center"
            >
              {content.listItems.map((item, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="text-text-primary font-serif text-lg md:text-xl tracking-wider border-b border-mist/30 pb-2"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={itemVariants}
            className="text-text-muted leading-loose"
          >
             <p className="whitespace-pre-line">
              {content.footer.split('**').map((part, i) => 
                i % 2 === 1 
                  ? <span key={i} className="text-text-primary font-bold">{part}</span>
                  : part
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
