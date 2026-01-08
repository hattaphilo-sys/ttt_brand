"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { HeroContent } from '@/types/section';

type Props = {
  content: HeroContent;
};

export default function HeroSection({ content }: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#050505]">
      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 8.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-center mb-8">
          <Image
            src="/ttt-logo.png"
            alt="The Think Time Logo"
            width={120}
            height={120}
            className="w-56 md:w-80 lg:w-96 h-auto"
            priority
          />
        </div>
        <h1 className="font-serif font-extralight uppercase whitespace-nowrap text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-text-primary">
          {content?.title ?? 'Ethereal Float'}
        </h1>
        {content?.subtitle && (
          <p className="mt-6 text-text-muted text-sm md:text-base opacity-60">
            {content.subtitle}
          </p>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase opacity-40 font-light">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-text-muted/30 to-transparent overflow-hidden">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-transparent via-text-primary/50 to-transparent"
            animate={{
              y: [-64, 64],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
