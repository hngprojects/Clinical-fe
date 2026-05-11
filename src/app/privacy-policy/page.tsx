import PrivacyPolicyHeader from '@/components/privacy-policy/PrivacyPolicyHeader';
import PrivacyPolicyContent from '@/components/privacy-policy/PrivacyPolicyContent';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about our privacy practices.',
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <PrivacyPolicyHeader />
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
