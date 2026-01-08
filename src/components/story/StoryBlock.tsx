"use client";
import { motion } from 'framer-motion';
import type { StoryBlock } from '@/types/content';

type Props = { block: StoryBlock };

export default function StoryBlockView({ block }: Props) {
  const dir =
    block.layout === 'image-left'
      ? 'md:flex-row'
      : block.layout === 'image-right'
      ? 'md:flex-row-reverse'
      : 'md:flex-col';

  return (
    <section className="py-16 md:py-24 bg-void overflow-hidden">
      <div className={`max-w-6xl mx-auto px-6 flex flex-col ${dir} gap-8 md:gap-12 items-center`}>
        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: block.layout === 'image-left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full aspect-[4/3] rounded-2xl border border-mist bg-depth overflow-hidden">
            {block.image ? (
               <img src={block.image} alt="" className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full bg-gradient-to-br from-mist/20 to-accent-glow" />
            )}
          </div>
          {block.caption && (
            <p className="mt-3 text-xs text-text-muted">{block.caption}</p>
          )}
        </motion.div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          {block.title && (
            <motion.h2
              className="font-serif text-3xl md:text-4xl text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {block.title}
            </motion.h2>
          )}
          <div className="mt-6 space-y-6">
            {block.body.map((p, i) => (
              <motion.p
                key={i}
                className="font-serif leading-loose text-text-primary/90 text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
