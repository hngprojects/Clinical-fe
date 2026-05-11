import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Import your new modular components
import AboutHero from '@/components/landing/about/AboutHero';
import AboutStory from '@/components/landing/about/AboutStory';
import AboutMissionVision from '@/components/landing/about/AboutMissionVission';
import AboutValues from '@/components/landing/about/AboutValues';
import AboutTeam from '@/components/landing/about/AboutTeam';

export default function AboutStandalonePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col gap-28 overflow-x-hidden py-28 md:py-0 text-base text-[#1a1a1a]">
        <AboutHero />
        <AboutStory />
        <AboutMissionVision />
        <AboutValues />
        <AboutTeam />
      </main>

      <Footer />
    </div>
  );
}
