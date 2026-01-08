import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-void text-text-primary flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-2xl md:text-3xl">手紙を受け取りました。</h1>
        <p className="text-sm text-text-muted">静かな共鳴が始まります。</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-mist px-5 py-2 text-sm transition-colors hover:border-white/30"
        >
          Topへ戻る
        </Link>
      </div>
    </main>
  );
}
