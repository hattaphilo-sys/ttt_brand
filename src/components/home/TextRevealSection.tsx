"use client";
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { TextRevealContent } from '@/types/section';

type Props = {
  content: TextRevealContent;
};

const RevealLine = ({ 
  text, 
  index, 
  total, 
  progress 
}: { 
  text: string; 
  index: number; 
  total: number; 
  progress: MotionValue<number>;
}) => {
  // スクロール進行度に応じたアニメーションの開始位置を計算
  // 上の行から順に開始する
  // 0.1 (開始) 〜 0.8 (終了) の間で順次表示
  const step = 0.6 / total;
  const start = 0.15 + (index * step);
  const end = start + 0.2; // 0.2の区間を使って完全にフォーカスする

  const opacity = useTransform(
    progress,
    [start - 0.1, start, end],
    [0, 0.2, 1]
  );

  const blurVal = useTransform(
    progress,
    [start - 0.1, end],
    [10, 0]
  );
  
  const y = useTransform(
    progress,
    [start - 0.1, end],
    [10, 0]
  );

  const filter = useTransform(blurVal, (v: number) => `blur(${v}px)`);

  return (
    <motion.p
      className="text-base md:text-xl font-serif text-text-primary leading-loose"
      style={{ opacity, filter, y }}
    >
      {text === '' ? '\u00A0' : text}
    </motion.p>
  );
};

export default function TextRevealSection({ content }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end end'] 
  });

  const text = content?.text ?? '静けさの中に、輪郭が現れる';
  const lines = text.split('\n');

  return (
    <section className="relative min-h-[300vh]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-void to-transparent pointer-events-none" />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="px-6 text-center">
          {lines.map((line, i) => (
            <RevealLine 
              key={i} 
              text={line} 
              index={i} 
              total={lines.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
