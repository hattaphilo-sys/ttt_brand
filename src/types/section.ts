import { ReactNode } from 'react';

export type SectionType =
  | 'Hero'
  | 'TextReveal'
  | 'ConceptFeature'
  | 'ConceptDetail'
  | 'PhilosophyLink'
  | 'CTA';

export type HeroContent = {
  title: string;
  subtitle?: string;
  href?: string;
};

export type TextRevealContent = {
  text: string;
};

export type ConceptFeatureContent = {
  heading: string;
  body: string | ReactNode;
};

export type ConceptDetailContent = {
  heading: string;
  subheading: string;
  body: string;
  listItems: string[];
  footer: string;
};

export type PhilosophyLinkContent = {
  href: string;
  title: string;
  desc: string;
};

export type CTAContent = {
  label: string;
  href?: string;
};

export type SectionContent =
  | HeroContent
  | TextRevealContent
  | ConceptFeatureContent
  | ConceptDetailContent
  | PhilosophyLinkContent
  | CTAContent;

export type SectionData = {
  id: string;
  type: SectionType;
  content: SectionContent;
};
