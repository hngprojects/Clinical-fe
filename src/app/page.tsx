import { Header } from '@/components/Header';
import { Hero } from './landing-page/Hero';
import { Features } from './landing-page/Features';
import { FeaturesGrid } from './landing-page/FeaturesGrid';
import { HowItWorks } from './landing-page/HowItWorks';
import { FAQ } from './landing-page/FAQ';
import { MedicalProfessional } from './landing-page/MedicalProfessional';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FeaturesGrid />
        <HowItWorks />
        <FAQ />
        <MedicalProfessional />
      </main>
      <Footer />
    </div>
  );
}
