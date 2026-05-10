import { Header } from '@/components/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { FAQ } from '@/components/landing/FAQ';
import { MedicalProfessional } from '@/components/landing/MedicalProfessional';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FeaturesGrid />
        <FAQ />
        <MedicalProfessional />
      </main>
      <Footer />
    </div>
  );
}
