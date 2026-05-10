export default function TermsAndConditions() {
  const terms = [
    {
      title: '1. Introduction',
      content:
        'These Terms and Conditions govern your access to and use of our platform. By using our services, you agree to comply with these terms.',
    },
    {
      title: '2. Use of the Service',
      content:
        'Our platform provides AI-assisted interpretation of lab results and access to doctor consultations for second opinion.',
      bulletTop: 'You agree to:',
      bullets: [
        'Provide accurate information',
        'Use the platform only for lawful purposes',
        'Not misuse or attempt to disrupt the system',
      ],
    },
    {
      title: '3. Medical Disclaimer',
      content:
        'Our platform provides AI-assisted guidance only and is not a substitute for professional medical diagnosis or treatment.',
      bullets: [
        'The AI results are for informational purposes',
        'Doctors provide guidance based on available information',
        'Always seek in-person medical care for emergencies',
      ],
    },
    {
      title: '4. User Responsibilities',
      content: 'You are responsible for',
      bullets: [
        'Ensuring the accuracy of the information you provide',
        'Using the platform responsibly',
      ],
    },
    {
      title: '5. Payments',
      content: 'Some features (e.g., doctor consultations) require payment.',
      bullets: [
        'Payments are processed through secure third-party providers',
        'Fees are clearly displayed before payment',
        'Refund policies (if any) will be communicated within the platform',
      ],
    },
    {
      title: '6. Limitation of Liability',
      content: 'We are not liable for:',
      bullets: [
        'Outcomes of doctor consultations',
        'Decisions made based on AI interpretations',
        'Refund policies (if any) will be communicated within the platform',
      ],
    },
    {
      title: '7. Termination',
      content: 'We reserve the right to suspend or terminate access if:',
      bullets: ['You violate these terms', 'You misuse the platform'],
    },
    {
      title: '8. Changes to Terms',
      content: 'We may update these Terms of Use from time to time.',
      subcontent: 'Continued use of the platform means you accept any updates.',
    },
    {
      title: '9. Contact Us',
      content:
        'If you have any questions or concerns about these Terms, you can reach us at:',
      bullets: [
        { label: 'Email', value: 'support@clinsight.com' },
        { label: 'Phone', value: '' },
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="relative flex max-lg:bg-[#11519A] flex-col justify-center items-center h-77 gap-6">
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/circle-bg.png)`,
          }}
        />
        <div
          className="max-lg:hidden absolute inset-0 -z-10 bg-center w-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(/circle-bg-web.png`,
          }}
        />
        <h1 className="text-[2rem] sm:text-[2.5rem] text-white font-semibold">
          Terms and Conditions
        </h1>
        <p className="text-base text-white">Last Updated, May 2026</p>
      </div>
      <div className="flex bg-[#FAFAFA] py-14 md:py-20 justify-center items-center">
        <div className="flex bg-[#F0F0F0] py-6 px-5 rounded-[12px] w-9/10 flex-col items-center gap-8">
          {terms.map((term, index) => (
            <div
              className="w-full flex flex-col gap-6 not-last:border-b border-[#E0E0E0] pb-8"
              key={index}
            >
              <h1 className="text-2xl font-semibold">{term.title}</h1>
              <div>
                <p className="text-[#5E5E5E]">{term.content}</p>
                {term.subcontent && (
                  <p className="text-[#5E5E5E] italic">{term.subcontent}</p>
                )}
                {term.bulletTop && (
                  <p className="text-[#5E5E5E] font-medium">{term.bulletTop}</p>
                )}
              </div>
              {term.bullets && (
                <div>
                  {term.bullets.map((bullet, bulletIndex) => (
                    <ul
                      key={bulletIndex}
                      className="flex items-start list-inside list-disc"
                    >
                      <li className="text-[#5E5E5E]">
                        {typeof bullet === 'string' ? (
                          bullet
                        ) : (
                          <>
                            {bullet.label}:{' '}
                            <span className="font-semibold text-[#1B1B1B]">
                              {bullet.value}
                            </span>
                          </>
                        )}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
