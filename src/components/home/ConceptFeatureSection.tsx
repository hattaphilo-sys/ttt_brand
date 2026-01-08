"use client";
import { motion } from 'framer-motion';
import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

export default function ConceptFeatureSection({ content }: Props) {
  return (
    <section className="py-32 bg-void">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-mist">
          <div className="py-16 md:py-24">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {content?.heading ?? 'コンセプト'}
            </motion.h2>
          </div>
          <div className="md:col-span-2" />
        </div>
        <div className="mt-10 flex justify-end">
          <motion.p
            className="max-w-md text-xs md:text-sm text-text-muted"
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
