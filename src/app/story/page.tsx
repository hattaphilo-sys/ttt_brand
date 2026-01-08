import { storyBlocks } from '@/data/story';
import StoryBlockView from '@/components/story/StoryBlock';
import StoryFooterLinks from '@/components/story/StoryFooterLinks';

export default function StoryPage() {
  return (
    <div>
      <header className="py-24 border-b border-mist">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary">The Origin</h1>
          <p className="mt-4 text-text-muted">この場所が生まれた理由</p>
        </div>
      </header>
      {storyBlocks.map((b) => (
        <StoryBlockView key={b.id} block={b} />
      ))}
      
      {/* Signature */}
      <div className="py-20 text-center">
        <p className="text-text-primary font-serif text-lg tracking-widest">
          Founder / Dialogue Partner
          <br />
          hatta
        </p>
      </div>

      <StoryFooterLinks />
    </div>
  );
}
