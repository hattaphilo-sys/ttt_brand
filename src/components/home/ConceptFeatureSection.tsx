import type { ConceptFeatureContent } from '@/types/section';

type Props = {
  content: ConceptFeatureContent;
};

export default function ConceptFeatureSection({ content }: Props) {
  return (
    <section className="py-24 bg-void">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        <div className="h-64 md:h-80 rounded-xl bg-depth" />
        <div>
          <h2 className="text-3xl font-serif text-text-primary">
            {content?.heading ?? 'コンセプト'}
          </h2>
          <p className="mt-4 text-text-muted">
            {content?.body ?? '深度と静寂をテーマにした、やわらかな体験設計。'}
          </p>
        </div>
      </div>
    </section>
  );
}
