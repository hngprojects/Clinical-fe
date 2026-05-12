interface PasswordResetUserEmailProps {
  resetLink: string;
  timeInMinutes: number;
}

export const PasswordResetUserEmail = ({ resetLink, timeInMinutes }: PasswordResetUserEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">
          Reset Your Clinsight Password
        </h1>

        {/* Main Message */}
        <p className="text-base mb-5">
          You requested to reset your password for your Clinsight account.
        </p>

        {/* Instructions */}
        <p className="text-base mb-5">
          Click the link below to create a new password:
        </p>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={resetLink}
            className="inline-block bg-blue-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-blue-600"
          >
            Reset Password
          </a>
        </div>

        {/* Expiration Info */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-5">
          <p className="m-0 text-sm text-amber-900">
            This link will expire in {timeInMinutes} minutes.
          </p>
        </div>

        {/* Security Notice */}
        <p className="text-sm text-gray-600 mb-5">
          If you did not request this, ignore this email.
        </p>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
          <p>The Clinsight Team</p>
          <p>© 2026 Clinsight. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
