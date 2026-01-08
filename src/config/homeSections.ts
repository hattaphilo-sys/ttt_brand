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
- 成功と引き換えた代償を取り戻すために`,
    },
  },
  {
    id: 'concept-sub',
    type: 'ConceptFeature',
    content: {
      heading: '（新規セクション）',
      body: 'ここに本文を入力してください。',
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
