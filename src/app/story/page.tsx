import { storyBlocks } from '@/data/story';
import StoryBlockView from '@/components/story/StoryBlock';
import CTASection from '@/components/home/CTASection';

export default function StoryPage() {
  return (
    <div>
      <header className="py-24 border-b border-mist">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary">Story</h1>
          <p className="mt-4 text-text-muted">思考の浮遊に、触感的な深度を</p>
        </div>
      </header>
      {storyBlocks.map((b) => (
        <StoryBlockView key={b.id} block={b} />
      ))}
      <CTASection content={{ label: 'Next: Philosophy & Pricing', href: '/pricing' }} />
    </div>
  );
}
