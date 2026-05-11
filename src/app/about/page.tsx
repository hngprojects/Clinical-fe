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
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 flex flex-col overflow-x-hidden text-base text-[#1B1B1B]">
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
