import { SectionData } from '@/types/section';
import ConceptSubContent from '@/components/home/ConceptSubContent';

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
      text: `あらゆるノイズが届かない
「真空」の中で、

生き方と在り方を
「Think」する。

1日1名、時間無制限の
対話空間。

「The Think Time」へ
ようこそ。`,
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
    id: 'concept-detail',
    type: 'ConceptDetail',
    content: {
      heading: `ここにあるのは、
「問い」と「無為」`,
      subheading: `ここにあるのは、
「問い」と「無為」`,
      body: `成果を出すこと。変化すること。
正しくあること。うまく話すこと。`,
      listItems: [
        '教えない',
        '導かない',
        '治さない',
        '救わない',
        '評価しない',
        '期待しない'
      ],
      footer: `ただあなたの内面を映す鏡 - 問い - として
同じ時間と空間に存在します。

あなたが望むのであれば、
永遠に沈黙が続いてもよい。

日常生活では決してあり得ない
**100％の対等性と心理的安全性**を創出します。`
    },
  },
  {
    id: 'concept-sub',
    type: 'ConceptFeature',
    content: {
      heading: '目指すのは、「ゼロ」。',
      body: <ConceptSubContent />,
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
