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
    <section className="py-24">
      <motion.div
        className="max-w-5xl mx-auto px-6 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href={content?.href ?? '/apply'}>
          <span className="inline-block px-10 py-4 rounded-full bg-white text-black font-serif tracking-widest text-sm md:text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] transition-all duration-300">
            {label}
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
