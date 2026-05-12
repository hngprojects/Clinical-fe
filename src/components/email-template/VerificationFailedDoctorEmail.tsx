interface VerificationFailedDoctorEmailProps {
  lastName: string;
  reasonLink: string;
}

export const VerificationFailedDoctorEmail = ({
  lastName,
  reasonLink,
}: VerificationFailedDoctorEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">
          Updates needed for Clinsight verification
        </h1>

        {/* Greeting */}
        <p className="text-base mb-5">Dr. {lastName},</p>

        {/* Thank You */}
        <p className="text-base mb-5">
          Thank you for applying to join Clinsight.
        </p>

        {/* Issue Message */}
        <div className="bg-red-50 border border-red-300 p-5 rounded-lg mb-5">
          <p className="text-base mb-0">
            Unfortunately, we could not verify your account based on the
            information provided.
          </p>
        </div>

        {/* Action */}
        <p className="text-base mb-5">
          Please click below to see why this could have happened:
        </p>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={reasonLink}
            className="inline-block bg-blue-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-blue-600"
          >
            See verification details
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
