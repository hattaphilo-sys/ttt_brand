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
      heading: 'コンセプト',
      body: '視覚的な静けさと触感的な奥行きを調和させたブランド体験を設計します。',
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
