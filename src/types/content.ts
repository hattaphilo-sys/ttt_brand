export type StoryBlockLayout = 'center-text' | 'image-left' | 'image-right' | 'text-only';
export type StoryBlock = {
  id: string;
  layout: StoryBlockLayout;
  chapter?: string;
  title?: string;
  subTitle?: string;
  body: string[];
  image?: string;
  caption?: string;
};

export type PricingCase = {
  id: string;
  caseName: string; // "CASE 01" etc
  title: string; // "The OS Unlearning" etc
  clientAttribute: string; // "会社員 / Webフリーランス" etc
  concept: string; // CONCEPT本文
  spec: string; // "月1回セッション + 共有ログ" etc
  price: string; // "¥380,000" etc
};

