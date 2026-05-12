interface CaseDeadlineReminderDoctorEmailProps {
  lastName: string;
  assignedTime: string;
  deadline: string;
  casesLink: string;
}

export const CaseDeadlineReminderDoctorEmail = ({
  lastName,
  assignedTime,
  deadline,
  casesLink,
}: CaseDeadlineReminderDoctorEmailProps) => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div className="max-w-2xl mx-auto p-5">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-5">
          Reminder: Case deadline approaching
        </h1>

        {/* Greeting */}
        <p className="text-base mb-5">Dr. {lastName},</p>

        {/* Message */}
        <p className="text-base mb-5">
          You have a pending case that requires your response.
        </p>

        {/* Case Details */}
        <div className="bg-gray-100 p-5 rounded-lg mb-5">
          <div className="mb-3">
            <p className="text-sm text-gray-600 m-0">Assigned</p>
            <p className="text-base font-bold m-0">{assignedTime}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 m-0">Deadline</p>
            <p className="text-base font-bold m-0">{deadline}</p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-300 p-4 rounded mb-5">
          <p className="m-0 text-sm text-red-800">
            If no response is received within the deadline, the case will be
            reassigned to another doctor.
          </p>
        </div>

        {/* Action */}
        <p className="text-base mb-5">
          Please log in and complete your review as soon as possible.
        </p>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href={casesLink}
            className="inline-block bg-green-500 text-white px-8 py-3 no-underline rounded font-bold text-base hover:bg-green-600"
          >
            Go to pending cases
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
