"use client";
import { motion } from 'framer-motion';
import { pricingCases } from '@/data/pricing';
import PricingCaseList from '@/components/pricing/PricingCaseList';
import CTASection from '@/components/home/CTASection';

const articleVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50, // 偶数は左(-50)から、奇数は右(50)から
    filter: "blur(4px)"
  }),
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function PricingPage() {
  return (
    <div>
      <section className="py-24 border-b border-mist">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="mx-auto max-w-[18ch] md:max-w-none font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-text-primary break-words">
            変容に、定価はない。
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary">なぜ言い値なのか？</h2>
          </div>

          <div className="mt-12 space-y-14">
            <motion.article 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={articleVariants}
              className="pt-10 border-t border-mist/30"
            >
              <p className="text-xs tracking-[0.2em] text-text-muted">01</p>
              <h3 className="mt-3 font-serif text-lg md:text-xl text-text-primary">
                市場価値ではなく、主観価値であるため
              </h3>
              <div className="mt-6 space-y-6 text-[15px] md:text-base text-text-primary/90 leading-loose">
                <p>
                  私たちがここで扱うのは、市場価値のあるスキルやノウハウではありません。あなたの「人生そのものの再定義」です。
                </p>
                <p>
                  「不要な鎧を脱いだ時、何が残るか」。その結果、ある人は数億円の損切りを決断し、ある人は自殺を思いとどまり、ある人は新たな使命を見つけます。
                </p>
                <p>
                  あなたの人生の文脈によって、この時間の価値は「ゼロ」にも「無限」にもなり得ます。
                </p>
                <p>
                  したがって、私はこの場に一方的な値段（レッテル）を貼りません。価値を決める権利と責任を、あなたにお返しします。
                </p>
              </div>
            </motion.article>

            <motion.article 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={articleVariants}
              className="pt-10 border-t border-mist/30"
            >
              <p className="text-xs tracking-[0.2em] text-text-muted">02</p>
              <h3 className="mt-3 font-serif text-lg md:text-xl text-text-primary">
                「痛み」の総量が等価であるべきだから
              </h3>
              <div className="mt-6 space-y-6 text-[15px] md:text-base text-text-primary/90 leading-loose">
                <p>
                  TTTは「鏡」です。対話の純度を保つためには、私とあなたが「対等」でなければなりません。
                </p>
                <p>
                  資産数十億の人間にとっての100万円と、起業したての人間にとっての100万円は、意味（痛み）が全く異なります。
                </p>
                <p>
                  私が求めているのは、金額の多寡ではありません。あなたがこの変容に対して、どれだけの「覚悟（Commitment）」を差し出せるか。その精神的な「痛み」の総量が、私たちを対等にします。
                </p>
                <p>
                  あなたが「痛い」と感じ、同時に「これなら人生を賭けられる」と納得できる金額。それが適正価格です。
                </p>
              </div>
            </motion.article>

            <motion.article 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={articleVariants}
              className="pt-10 border-t border-mist/30"
            >
              <p className="text-xs tracking-[0.2em] text-text-muted">03</p>
              <h3 className="mt-3 font-serif text-lg md:text-xl text-text-primary">
                主権を取り戻す最初の儀式
              </h3>
              <div className="mt-6 space-y-6 text-[15px] md:text-base text-text-primary/90 leading-loose">
                <p>
                  これまであなたは、誰かが決めた価格、誰かが決めた価値、誰かが決めたルールに従って生きてきたはずです。
                </p>
                <p>TTTは、その「他人軸のOS」を書き換える場所です。</p>
                <p>
                  だからこそ、契約という入り口の時点で、他人が決めた数字に従うことをやめていただきます。
                </p>
                <p>
                  自分で決め、自分で提示し、自分で責任を取る。その行為そのものが、あなたの人生の主権を取り戻すための、最初のセッション（The First Ritual）なのです。
                </p>
              </div>
            </motion.article>
          </div>
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
