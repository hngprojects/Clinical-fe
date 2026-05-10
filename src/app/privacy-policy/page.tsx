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
    <main>
      <Header />
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}
