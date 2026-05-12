interface WelcomeDoctorEmailProps {
  ctaLink: string;
}

export const WelcomeDoctorEmail = ({ ctaLink }: WelcomeDoctorEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-5">
          Welcome to Clinsight
        </h1>

        {/* Main Message */}
        <p className="text-base mb-5">
          You are now part of a growing network of verified doctors helping patients understand their lab results faster and better.
        </p>

        {/* Role Description */}
        <div className="bg-gray-100 p-5 rounded-lg mb-5">
          <p className="mb-3">
            You will receive case requests based on your availability to review AI interpretations, provide corrections, and guide patients with clear next steps.
          </p>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-5">
          <p className="font-bold text-amber-900 m-0">
            ⚠️ Please do not recommend any drugs for patients.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={ctaLink}
            className="inline-block bg-green-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-green-600"
          >
            Log in to your dashboard to get started
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
          <p>The Clinsight Team</p>
          <p>© 2026 Clinsight. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
