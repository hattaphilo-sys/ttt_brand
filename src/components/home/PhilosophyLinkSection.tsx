"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { PhilosophyLinkContent } from '@/types/section';

type Props = {
  content: PhilosophyLinkContent;
};

export default function PhilosophyLinkSection({ content }: Props) {
  const href = content?.href ?? '/philosophy';
  const title = content?.title ?? 'Philosophy';
  const desc = content?.desc ?? '思想に触れる';

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link href={href} className="block">
          <motion.div
            className="w-full aspect-[16/9] rounded-2xl border border-mist bg-depth transition-colors hover:bg-gray-900/70 p-8 md:p-12 flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <div className="flex w-full items-end md:items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-text-primary">{title}</h3>
                <p className="mt-2 text-text-muted">{desc}</p>
              </div>
              <div className="text-text-primary text-2xl">→</div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
