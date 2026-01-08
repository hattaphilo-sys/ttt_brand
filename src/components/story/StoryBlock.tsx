"use client";
import { motion } from 'framer-motion';
import type { StoryBlock } from '@/types/content';

type Props = { block: StoryBlock };

export default function StoryBlockView({ block }: Props) {
  const isTextOnly = block.layout === 'text-only' || block.layout === 'center-text';
  
  const dir =
    block.layout === 'image-left'
      ? 'md:flex-row'
      : block.layout === 'image-right'
      ? 'md:flex-row-reverse'
      : 'md:flex-col';

  return (
    <section className="py-24 md:py-32 overflow-hidden relative">
      <div className={`max-w-6xl mx-auto px-6 flex flex-col ${dir} gap-12 md:gap-20 items-center`}>
        
        {/* Image Side (Hidden if text-only) */}
        {!isTextOnly && (
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: block.layout === 'image-left' ? -30 : 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden opacity-90">
              {block.image ? (
                 <img src={block.image} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" />
              ) : (
                 <div className="w-full h-full bg-mist/5" />
              )}
            </div>
            {block.caption && (
              <p className="mt-4 text-xs tracking-widest text-text-muted text-center md:text-left">{block.caption}</p>
            )}
          </motion.div>
        )}

        {/* Text Side */}
        <div className={`w-full ${isTextOnly ? 'max-w-3xl text-left' : 'md:w-1/2'}`}>
          
          {/* Header Group */}
          <div className="mb-12 relative">
             {block.chapter && (
                <motion.span 
                  className="block text-xs tracking-[0.2em] text-text-muted mb-2 font-sans"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  CHAPTER {block.chapter}
                </motion.span>
             )}
             
             {block.subTitle && (
                <motion.h3
                  className="text-base md:text-lg text-text-muted font-serif mb-4 tracking-wide italic"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {block.subTitle}
                </motion.h3>
             )}

            {block.title && (
              <motion.h2
                className="font-serif text-xl md:text-3xl text-text-primary leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {block.title}
              </motion.h2>
            )}
          </div>

          <div className="space-y-8">
            {block.body.map((p, i) => (
              <motion.p
                key={i}
                className="font-serif leading-loose text-text-primary/80 text-[15px] md:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.05) }}
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
