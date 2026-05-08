'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Become a Doctor', href: '#become-a-doctor' },
  { name: 'Why It Matters', href: '#why-it-matters' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-12">
        <Link href="/" className="flex items-center gap-2">
          {/* TODO: Replace with actual logo image asset */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white">
            C
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Clinsight
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden rounded-md border-brand-blue bg-[#FFFFFE] px-6 font-semibold text-brand-blue hover:bg-[#FFFFFE] sm:flex"
          >
            Log In
          </Button>

          <Button className="rounded-md bg-brand-blue px-6 font-semibold text-white hover:bg-brand-blue">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
