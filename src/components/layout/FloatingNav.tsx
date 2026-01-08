'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Gem, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function FloatingNav() {
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const [inHomeHero, setInHomeHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(true);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 300);

      if (pathname === '/') {
        const h = window.innerHeight || 0;
        const y = window.scrollY || 0;
        setInHomeHero(y < h * 0.95);
      } else {
        setInHomeHero(false);
      }
    };
    const onResize = () => {
      if (pathname === '/') {
        const h = window.innerHeight || 0;
        const y = window.scrollY || 0;
        setInHomeHero(y < h * 0.95);
      } else {
        setInHomeHero(false);
      }
    };

    // initialize state on mount
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [pathname]);

  const items = [
    { href: '/', label: 'Home', Icon: Home },
    { href: '/story', label: 'Story', Icon: BookOpen },
    { href: '/pricing', label: 'Pricing', Icon: Gem },
    { href: '/apply', label: 'Apply', Icon: Send },
  ];

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolling || inHomeHero ? 0 : 1 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
      style={{ pointerEvents: isScrolling || inHomeHero ? 'none' : 'auto' }}
    >
      <div className="flex items-center gap-2 rounded-full bg-depth/80 backdrop-blur-md border border-mist px-6 py-3">
        {items.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          const base = isActive ? 'text-primary' : 'text-primary/80';
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
              <Icon size={20} className="text-white/80" />
              <span className="hidden md:inline text-sm">{label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
