import type { CTAContent } from '@/types/section';

type Props = {
  content: CTAContent;
};

export default function CTASection({ content }: Props) {
  const label = content?.label ?? 'Get Started';
  return (
    <section className="py-24 bg-void">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center">
        <button className="px-6 py-3 rounded-full bg-depth text-text-primary border border-mist hover:bg-mist/10 transition-colors">
          {label}
        </button>
      </div>
    </section>
  );
}
