import { SectionData } from '@/types/section';

export const homeSections: SectionData[] = [
  {
    id: 'hero',
    type: 'Hero',
    content: {
      title: 'THE THINK TIME',
      subtitle: '命の使い方を、問い直す。',
      href: '/story',
    },
  },
  {
    id: 'text-reveal',
    type: 'TextReveal',
    content: {
      text: `あらゆるノイズが届かない「真空」の中で、
生き方と在り方を「Think」する。

1日1名、時間無制限の対話空間。

「The Think Time」へようこそ。`,
    },
  },
  {
    id: 'concept-feature',
    type: 'ConceptFeature',
    content: {
      heading: '対話相手は、自分自身。',
      body: `- やり残したことにケリをつけるために
- 意味のない人生に意味を見出すために
- 成功と引き換えた代償を取り戻すために
- 自分の人生を真剣に生きるために

常識も、人の目も、道徳さえも
一旦横において疑ってみる。

そんな、人生で一番「考える時間」を提供します。`,
    },
  },
  {
    id: 'concept-sub',
    type: 'ConceptFeature',
    content: {
      heading: `ここにあるのは
「問い」と「無為」`,
      body: (
        <div className="space-y-12 text-left md:text-center">
          <p className="leading-loose text-text-muted">
            成果を出すこと。変化すること。<br />
            正しくあること。うまく話すこと。<br />
            <br />
            これら全てを、私はあなたに求めません。
          </p>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xs mx-auto text-lg text-text-primary font-bold">
            <li>- 教えない</li>
            <li>- 導かない</li>
            <li>- 治さない</li>
            <li>- 救わない</li>
            <li>- 評価しない</li>
            <li>- 期待しない</li>
          </ul>

          <p className="leading-loose text-text-muted">
            ただあなたの内面を映す鏡 - 問い - として<br />
            同じ時間と空間に存在します。<br />
            <br />
            あなたが望むのであれば、<br />
            永遠に沈黙が続いてもよい。<br />
            <br />
            日常生活では決してあり得ない<br />
            <strong className="text-text-primary font-bold">100％の対等性と心理的安全性</strong>を創出します。
          </p>
        </div>
      ),
    },
  },
  {
    id: 'philosophy',
    type: 'PhilosophyLink',
    content: {
      href: '/pricing',
      title: 'Philosophy',
      desc: '思想に触れる',
    },
  },
  {
    id: 'cta',
    type: 'CTA',
    content: {
      label: 'Apply for Session',
      href: '/apply',
    },
  },
];
