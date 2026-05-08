import { Header } from '@/components/landing/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero section will go here */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold">Design Reached: Header Done</h1>
          <p className="mt-4 text-lg text-slate-600">
            I have implemented the header according to the design. Please
            review.
          </p>
        </section>
      </main>
    </div>
  );
}
