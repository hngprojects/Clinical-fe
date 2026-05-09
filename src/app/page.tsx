import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FeaturesGrid />
        <HowItWorks />
      </main>
    </div>
  );
}
