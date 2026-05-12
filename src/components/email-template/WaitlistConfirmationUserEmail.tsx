interface WaitlistConfirmationUserEmailProps {
  firstName: string;
}

export const WaitlistConfirmationUserEmail = ({ firstName }: WaitlistConfirmationUserEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          You are on the Clinsight waitlist 🎉
        </h1>

        {/* Greeting */}
        <p className="text-base mb-5">
          Hi {firstName},
        </p>

        {/* Main Message */}
        <p className="text-base mb-5 font-bold">
          You made it. You are officially on the Clinsight waitlist.
        </p>

        {/* Mission Statement */}
        <div className="bg-gray-100 p-5 rounded-lg mb-5">
          <p className="text-base mb-0">
            We are building something that Nigeria really needs: a simple, affordable way to understand your lab results and get a trusted doctor&apos;s opinion without the long wait or the big bill.
          </p>
        </div>

        {/* Early Access */}
        <p className="text-base mb-5">
          You will be among the first to know when we go live.
        </p>

        {/* Personal Touch */}
        <p className="text-base mb-5 italic text-gray-600">
          If you have ever had a lab result on your phone or bedside table and wondered &quot;what does this mean?&quot;, you are who we are building this for.
        </p>

        {/* Thank You */}
        <p className="text-base mb-8">
          Thank you for believing in what we are doing. We will not keep you waiting long.
        </p>

        {/* Closing */}
        <div className="text-base mb-8">
          <p className="m-0 mb-2">Warm regards,</p>
          <p className="m-0">The Clinsight Team</p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
          <p>© 2026 Clinsight. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
