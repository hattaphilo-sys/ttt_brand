import { pricingCases } from '@/data/pricing';
import PricingCaseList from '@/components/pricing/PricingCaseList';
import CTASection from '@/components/home/CTASection';

export default function PricingPage() {
  return (
    <div className="bg-void">
      <section className="py-24 border-b border-mist">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary">定価はありません</h1>
          <p className="mt-4 text-text-muted">価値の輪郭に応じて、層と期間を柔軟に設計します。</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary">なぜ言い値なのか？</h2>
          <p className="mt-4 text-text-primary/90 leading-loose">
            速度を止めるのではなく、層を増やすための投資だからです。関与の深度、期間、成果物の有無により価格は変動します。事例はあくまで手触りの参考としてご覧ください。
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <PricingCaseList cases={pricingCases} />
        </div>
      </section>
      <CTASection content={{ label: 'Proceed to Apply', href: '/apply' }} />
    </div>
  );
}
