export type StoryBlockLayout = 'center-text' | 'image-left' | 'image-right';
export type StoryBlock = {
  id: string;
  layout: StoryBlockLayout;
  title?: string;
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

