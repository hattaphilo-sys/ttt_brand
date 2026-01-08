"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { TextRevealContent } from '@/types/section';

type Props = {
  content: TextRevealContent;
};

export default function TextRevealSection({ content }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const blurPx = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
    [8, 2, 0, 0, 0, 2, 8]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
    [0.5, 0.85, 1, 0.95, 1, 0.85, 0.5]
  );
  const blurFilter = useTransform(blurPx, (v: number) => `blur(${v}px)`);

  return (
    <section className="relative min-h-[150vh]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-void to-transparent pointer-events-none" />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
        >
          <motion.p
            className="text-base md:text-xl font-serif text-text-primary whitespace-pre-line break-words"
            style={{ filter: blurFilter, opacity }}
          >
            {content?.text ?? '静けさの中に、輪郭が現れる'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
