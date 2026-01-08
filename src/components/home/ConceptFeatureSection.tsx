"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

function formatBody(body: string) {
  const lines = body.split('\n');
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (keyPrefix: string) => {
    if (listItems.length > 0) {
      nodes.push(
        <motion.ul 
          key={`${keyPrefix}-list`} 
          className="text-left inline-block mb-8 space-y-2 mx-auto"
          variants={containerVariants}
        >
          {listItems.map((item, i) => (
            <motion.li key={i} className="flex items-start" variants={itemVariants}>
              <span className="mr-2 text-mist">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('-')) {
      listItems.push(trimmed.substring(1).trim());
    } else {
      flushList(`line-${i}`);
      if (trimmed) {
        const parts = line.split(/(「考える時間」)/g);
        nodes.push(
          <motion.p key={`line-${i}`} className="mb-2 last:mb-0" variants={itemVariants}>
             {parts.map((part, j) => 
               part === '「考える時間」' 
                 ? <span key={j} className="font-bold text-text-primary">{part}</span>
                 : part
             )}
          </motion.p>
        );
      } else {
        nodes.push(<div key={`line-${i}`} className="h-4" />);
      }
    }
  });
  flushList('end');
  
  return nodes;
}

export default function ConceptFeatureSection({ content }: Props) {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-b border-mist py-24 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-serif text-text-primary break-words whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content?.heading ?? 'コンセプト'}
          </motion.h2>
        </div>
        {content?.body && (
            <div className="mt-10 flex justify-center text-center">
              <motion.div
                className="max-w-2xl text-sm md:text-base leading-relaxed text-text-muted text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={containerVariants}
              >
                {typeof content.body === 'string' ? formatBody(content.body) : content.body}
              </motion.div>
            </div>
          )}
      </div>
    </section>
  );
}
