"use client";
import { motion } from 'framer-motion';
import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

export default function ConceptFeatureSection({ content }: Props) {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-b border-mist py-24 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-serif text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content?.heading ?? 'コンセプト'}
          </motion.h2>
        </div>
        <div className="mt-10 flex justify-center text-center">
          <motion.p
            className="max-w-lg text-sm md:text-base leading-relaxed text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content?.body ?? '視覚的な静けさと触感的な奥行きを調和させたブランド体験を設計します。'}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
