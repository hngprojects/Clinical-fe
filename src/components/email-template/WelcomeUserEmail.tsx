interface WelcomeUserEmailProps {
  ctaLink: string;
}

export const WelcomeUserEmail = ({ ctaLink }: WelcomeUserEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-5">
          Welcome to Clinsight
        </h1>

        {/* Main Message */}
        <p className="text-base mb-5">
          You can now understand your lab results in seconds.
        </p>

        {/* Benefits Section */}
        <div className="bg-gray-100 p-5 rounded-lg mb-5">
          <p className="font-bold mb-3">Upload your lab report and get:</p>
          <ul className="m-0 pl-5">
            <li className="mb-2">Clear explanations in plain language</li>
            <li className="mb-2">Instant risk levels</li>
            <li>Simple next steps you can act on</li>
          </ul>
        </div>

        {/* Additional Info */}
        <p className="text-sm mb-5 text-gray-600">
          If you need more, you can request a verified doctor review anytime.
        </p>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={ctaLink}
            className="inline-block bg-blue-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-blue-600"
          >
            Get started now
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
