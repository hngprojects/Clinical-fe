interface NewCaseAssignedDoctorEmailProps {
  lastName: string;
  caseLink: string;
  timeLimit: string;
}

export const NewCaseAssignedDoctorEmail = ({
  lastName,
  caseLink,
  timeLimit,
}: NewCaseAssignedDoctorEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">New case assigned to you</h1>

        {/* Greeting */}
        <p className="text-base mb-5">Dr. {lastName},</p>

        {/* Message */}
        <p className="text-base mb-5">
          A patient has requested a second opinion, and the case has been
          assigned to you.
        </p>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={caseLink}
            className="inline-block bg-green-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-green-600"
          >
            Accept or reject the case
          </a>
        </div>

        {/* Time Limit Warning */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-5">
          <p className="m-0 text-sm text-amber-900">
            If you do not accept the case in {timeLimit} it will be
            automatically rejected.
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
