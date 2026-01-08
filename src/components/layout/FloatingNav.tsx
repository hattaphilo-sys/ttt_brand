'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Gem, Send } from 'lucide-react';

export default function FloatingNav() {
  const pathname = usePathname();

  const items = [
    { href: '/', label: 'Home', Icon: Home },
    { href: '/story', label: 'Story', Icon: BookOpen },
    { href: '/pricing', label: 'Pricing', Icon: Gem },
    { href: '/apply', label: 'Apply', Icon: Send },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 rounded-full bg-depth/80 backdrop-blur-md border border-mist px-6 py-3">
        {items.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          const base = isActive ? 'text-primary' : 'text-muted';
          const applyEmphasis = label === 'Apply';
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors hover:text-primary ${
                applyEmphasis ? 'text-primary bg-mist/10' : base
              }`}
            >
              <Icon size={20} />
              <span className="hidden md:inline text-sm">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

