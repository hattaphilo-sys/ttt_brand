"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

// 擬似ランダムな方向を生成 (SSRでの整合性のためindexベース)
const getDirection = (index: number) => {
  const directions = [
    { x: 0, y: 30 },   // 下から
    { x: 0, y: -30 },  // 上から
    { x: 30, y: 0 },   // 右から
    { x: -30, y: 0 },  // 左から
  ];
  return directions[index % directions.length];
};

// 擬似ランダムな遅延を生成
const getDelay = (index: number) => {
  // 0.3s 〜 1.2s の間でランダムに見えるように分散
  return 0.3 + ((index * 7) % 10) * 0.1;
};

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    ...getDirection(i),
    filter: "blur(4px)"
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.8, // ゆっくりとしたフェード
      delay: getDelay(i),
      ease: [0.2, 0.8, 0.2, 1] as const,
    }
  }),
};

function formatBody(body: string) {
  const lines = body.split('\n');
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];
  let elementIndex = 0; // 通しのインデックス

  const flushList = (keyPrefix: string) => {
    if (listItems.length > 0) {
      nodes.push(
        <ul 
          key={`${keyPrefix}-list`} 
          className="text-left inline-block mb-8 space-y-2 mx-auto"
        >
          {listItems.map((item, i) => {
            const currentIdx = elementIndex++;
            return (
              <motion.li 
                key={i} 
                className="flex items-start" 
                custom={currentIdx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
              >
                <span className="mr-2 text-mist">•</span>
                <span>{item}</span>
              </motion.li>
            );
          })}
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
        const currentIdx = elementIndex++;
        nodes.push(
          <motion.p 
            key={`line-${i}`} 
            className="mb-2 last:mb-0" 
            custom={currentIdx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
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
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {content?.heading ?? 'コンセプト'}
          </motion.h2>
        </div>
        {content?.body && (
            <div className="mt-10 flex justify-center text-center">
              <div className="max-w-2xl text-sm md:text-base leading-relaxed text-text-muted text-center">
                {typeof content.body === 'string' ? formatBody(content.body) : content.body}
              </div>
            </div>
        )}
      </div>
    </section>
  );
}
