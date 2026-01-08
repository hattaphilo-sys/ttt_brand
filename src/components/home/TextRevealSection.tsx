import type { TextRevealContent } from '@/types/section';

type Props = {
  content: TextRevealContent;
};

export default function TextRevealSection({ content }: Props) {
  return (
    <section className="h-screen flex items-center justify-center bg-depth">
      <div className="px-6 text-center">
        <p className="text-2xl text-text-primary">
          {content?.text ?? '静けさの中に、輪郭が現れる'}
        </p>
      </div>
    </section>
  );
}
