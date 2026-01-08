import { homeSections } from '../config/homeSections';
import type { SectionData } from '../types/section';
import HeroSection from '../components/home/HeroSection';
import TextRevealSection from '../components/home/TextRevealSection';
import ConceptFeatureSection from '../components/home/ConceptFeatureSection';
import PhilosophyLinkSection from '../components/home/PhilosophyLinkSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {homeSections.map((section: SectionData) => {
        switch (section.type) {
          case 'Hero':
            return <HeroSection key={section.id} content={section.content} />;
          case 'TextReveal':
            return (
              <TextRevealSection key={section.id} content={section.content} />
            );
          case 'ConceptFeature':
            return (
              <ConceptFeatureSection
                key={section.id}
                content={section.content}
              />
            );
          case 'PhilosophyLink':
            return (
              <PhilosophyLinkSection
                key={section.id}
                content={section.content}
              />
            );
          case 'CTA':
            return <CTASection key={section.id} content={section.content} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
