import PrivacyPolicyHeader from '@/components/PrivacyPolicyHeader';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about our privacy practices.',
};

export default function Page() {
  return (
    <div>
      <Header />
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}
