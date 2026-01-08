import type { HeroContent } from '@/types/section';

type Props = {
  content: HeroContent;
};

export default function HeroSection({ content }: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-void">
      <div className="absolute inset-0 bg-accent-glow" />
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-serif text-7xl md:text-8xl leading-tight tracking-tight text-text-primary">
          {content?.title ?? 'Ethereal Float'}
        </h1>
        {content?.subtitle && (
          <p className="mt-6 text-text-muted text-xl">
            {content.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
