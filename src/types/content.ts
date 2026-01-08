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
  clientAttribute: string;
  catchCopy: string;
  summary: string;
  detail: string;
};

