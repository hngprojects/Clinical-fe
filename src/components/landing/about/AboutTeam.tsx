import Image from 'next/image';

const team = [
  {
    name: 'Dr. Amara Okafor',
    role: 'Chief Medical Officer',
    pic: '/Frame 2147230223.png',
  },
  {
    name: 'Dr. Sandra Jordan',
    role: 'CEO & Co-founder',
    pic: '/Frame 2147230224.png',
  },
  {
    name: 'Dr. John Fidelis',
    role: 'Head of Engineering',
    pic: '/Frame 2147230225.png',
  },
  { name: 'Sadiq Usman', role: 'Head of Design', pic: '/Frame 2147230227.png' },
  {
    name: 'Dr. Farouk Sadiq',
    role: 'Clinical Lead',
    pic: '/Frame 2147230226.png',
  },
  { name: 'Fatima Gowon', role: 'Head of AI', pic: '/Frame 2147230228.png' },
];

export default function AboutTeam() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:py-16">
      <div className="mb-6 flex items-center gap-1.25">
        <div className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
        <h3 className="text-xl font-medium uppercase text-[#F59E0B]">
          THE TEAM
        </h3>
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-12">
        <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-[#272727] md:text-[40px] md:leading-12">
          People behind the platform
        </h2>

        <div className="grid w-full max-w-271.75 grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex w-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-[#F0F0F0] bg-white shadow-[0px_4px_24px_-1px_rgba(39,39,39,0.05)] mx-auto transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[320/391] w-full bg-gray-100">
                <Image
                  src={member.pic}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex h-20 flex-col items-start justify-center px-6 py-2">
                <p className="text-base font-semibold leading-8 text-[#272727]">
                  {member.name}
                </p>
                <p className="text-sm font-normal leading-6 text-[#135BAD]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
