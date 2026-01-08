import Link from 'next/link';
import type { PhilosophyLinkContent } from '@/types/section';

type Props = {
  content: PhilosophyLinkContent;
};

export default function PhilosophyLinkSection({ content }: Props) {
  const href = content?.href ?? '/philosophy';
  const title = content?.title ?? 'Philosophy';
  const desc = content?.desc ?? '思想に触れる';

  return (
    <section className="py-24 bg-void">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href={href}
          className="block rounded-2xl border border-mist bg-depth/60 backdrop-blur-md p-8 md:p-12 transition-colors hover:bg-mist/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif text-text-primary">{title}</h3>
              <p className="mt-2 text-text-muted">{desc}</p>
            </div>
            <div className="text-text-primary">→</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
