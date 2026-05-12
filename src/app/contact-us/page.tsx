'use client';

import { useState } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { HugeiconsIcon } from '@hugeicons/react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import {
  Mail01Icon,
  Call02Icon,
  Location01Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function ContactUsPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, message }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(payload?.error || 'Failed to send message.');
      }

      setSuccessMessage(
        'Message sent successfully. We will get back to you soon.',
      );
      setFirstName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className={`${inter.variable} ${playfairDisplay.variable} min-h-screen bg-[#f5f7fb] text-gray-800`}
    >
      <Header />

      {/* HERO */}
      <section className="mx-auto flex max-w-212.75 flex-col items-center gap-5 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          We’d love to{' '}
          <span className="inline-block rounded bg-[#1565C0] px-2 py-1 text-white">
            hear from you.
          </span>
        </h1>

        <p className="max-w-2xl text-gray-500">
          Questions, concerns, or partnership inquiries? We’d love to hear from
          you. Our team replies within one business day.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1.4fr_0.8fr]">
        {/* FORM */}
        <div className="w-full rounded-[12px] border border-gray-200 bg-white p-7.5 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            Send us a message
          </h2>

          <p className="text-sm text-gray-500">
            Fill out the form and we’ll reach shortly.
          </p>
          <form
            className="mt-7.5 flex flex-col gap-7.5"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#101828]">
                First Name
                <span className="mr-1 text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                disabled={isLoading}
                className="h-13 w-full rounded-[10px] border border-[#D0D5DD] px-4 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#101828]">
                Email
                <span className="mr-1 text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={isLoading}
                className="h-13 w-full rounded-[10px] border border-[#D0D5DD] px-4 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#101828]">
                Message
                <span className="mr-1 text-red-500">*</span>
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                disabled={isLoading}
                className="min-h-35 w-full rounded-[10px] border border-[#D0D5DD] px-4 py-3 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {errorMessage && (
              <p
                role="alert"
                aria-live="assertive"
                className="-mt-2 text-sm text-red-600"
              >
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p
                role="status"
                aria-live="polite"
                className="-mt-2 text-sm text-green-600"
              >
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="h-13 rounded-[10px] bg-[#1565C0] text-white transition hover:bg-[#0F5BB3] disabled:cursor-not-allowed disabled:bg-[#8FB7E0]"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-4">
          <div className="rounded-[12px] bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Reach us directly
            </h3>

            <div className="mt-5 space-y-5 text-sm text-gray-600">
              <div className="flex gap-3">
                <HugeiconsIcon icon={Mail01Icon} size={16} />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>hello@clinsight.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <HugeiconsIcon icon={Call02Icon} size={16} />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p>+234 806 442 0669</p>
                </div>
              </div>

              <div className="flex gap-3">
                <HugeiconsIcon icon={Location01Icon} size={16} />
                <div>
                  <p className="font-medium text-gray-900">Headquarters</p>
                  <p>Wuse Zone 4</p>
                </div>
              </div>

              <div className="flex gap-3">
                <HugeiconsIcon icon={Clock01Icon} size={16} />
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p>Mon - Fri: 9am - 6pm WAT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] bg-[#E8F0F9] p-5">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />

            <h4 className="mt-3 font-semibold text-gray-900">
              Medical emergency?
            </h4>

            <p className="text-sm text-gray-500">
              Clinsight is not for emergencies. Call 911 or use your local
              emergency number immediately if you need urgent care.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
