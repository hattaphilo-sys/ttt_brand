"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

function formatBody(body: string) {
  const lines = body.split('\n');
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (keyPrefix: string) => {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={`${keyPrefix}-list`} className="text-left inline-block mb-8 space-y-2 mx-auto">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-mist">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
          <p key={`line-${i}`} className="mb-2 last:mb-0">
             {parts.map((part, j) => 
               part === '「考える時間」' 
                 ? <span key={j} className="font-bold text-text-primary">{part}</span>
                 : part
             )}
          </p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {typeof content.body === 'string' ? formatBody(content.body) : content.body}
              </motion.div>
            </div>
          )}
      </div>
    </section>
  );
}
