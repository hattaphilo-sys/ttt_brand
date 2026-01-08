import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <div>
          <Link href="/privacy" className="text-xs text-text-muted">
            Privacy Policy
          </Link>
        </div>
        <div>
          <p className="text-xs text-text-muted">© 2024 The Ethereal Float. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
