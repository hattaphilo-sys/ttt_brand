"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { HeroContent } from '@/types/section';

type Props = {
  content: HeroContent;
};

export default function HeroSection({ content }: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-widest text-text-primary">
          {content?.title ?? 'Ethereal Float'}
        </h1>
        {content?.subtitle && (
          <p className="mt-6 text-text-muted text-sm md:text-base opacity-60">
            {content.subtitle}
          </p>
        )}
        <div className="mt-6">
          <Link
            href={content?.href ?? '/story'}
            className="inline-flex items-center border border-mist px-6 py-2 rounded-full text-sm hover:bg-white/10 transition"
          >
            Read Story
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
