import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
