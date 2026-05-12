interface VerificationUserEmailProps {
  pin: string;
  expirationTime: string;
}

export const VerificationUserEmail = ({ pin, expirationTime }: VerificationUserEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">
          Your Clinsight Verification Code
        </h1>

        {/* PIN Code */}
        <div className="bg-gray-100 border-2 border-blue-500 p-5 rounded-lg mb-5 text-center">
          <p className="text-sm text-gray-600 m-0 mb-3">Verification Code</p>
          <p className="text-4xl font-bold tracking-widest m-0 text-blue-500">
            {pin}
          </p>
        </div>

        {/* Security Warning */}
        <div className="bg-red-50 border border-red-500 p-4 rounded mb-5">
          <p className="m-0 text-sm font-bold text-red-800">
             Never share this code with anyone
          </p>
        </div>

        {/* Expiration Info */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-5">
          <p className="m-0 text-sm text-amber-900">
            This code will expire in {expirationTime}.
          </p>
        </div>

        {/* Security Notice */}
        <p className="text-sm text-gray-600 mb-5">
          If you did not request this, you can ignore this email.
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
