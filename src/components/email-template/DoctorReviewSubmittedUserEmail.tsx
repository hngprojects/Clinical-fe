interface DoctorReviewSubmittedUserEmailProps {
  firstName: string;
  reviewLink: string;
}

export const DoctorReviewSubmittedUserEmail = ({
  firstName,
  reviewLink,
}: DoctorReviewSubmittedUserEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">
          Your doctor has submitted their review
        </h1>

        {/* Greeting */}
        <p className="text-base mb-5">Hi {firstName},</p>

        {/* Good News */}
        <p className="text-base mb-5 font-bold text-green-600">
          Good news!!! Your doctor has reviewed your lab result and their
          response is ready.
        </p>

        {/* What They Submitted */}
        <div className="bg-blue-50 border border-blue-300 p-5 rounded-lg mb-5">
          <p className="font-bold mb-3">Your doctor has submitted:</p>
          <ul className="m-0 pl-5">
            <li className="mb-2">
              A clinical explanation of your results in plain language
            </li>
            <li className="mb-2">A risk clarification (if needed)</li>
            <li>Recommended next steps for you</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={reviewLink}
            className="inline-block bg-blue-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-blue-600"
          >
            View your doctor&apos;s review
          </a>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-5">
          <p className="m-0 text-sm text-amber-900">
            Please note: this review is for guidance only and does not replace
            an in-person consultation for serious concerns.
          </p>
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
