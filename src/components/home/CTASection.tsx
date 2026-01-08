"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { CTAContent } from '@/types/section';

type Props = {
  content: CTAContent;
};

export default function CTASection({ content }: Props) {
  const label = content?.label ?? 'Get Started';
  return (
    <section className="py-24 bg-void">
      <motion.div
        className="max-w-5xl mx-auto px-6 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href={content?.href ?? '/apply'}>
          <span className="px-6 py-3 rounded-full border border-mist text-text-primary bg-transparent hover:bg-white hover:text-black transition-colors">
            {label}
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
