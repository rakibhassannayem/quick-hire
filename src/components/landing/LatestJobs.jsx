import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../shared/Container";
import Title from "../shared/Title";

const jobs = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    companyName: "Revolut",
    jobTitle: "Email Marketing",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team manage their email marketing campaigns.",
    keywords: ["Marketing", "Design"],
  },
  {
    id: 2,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Brand Designer",
    companyName: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team to design new features",
    keywords: ["Design", "Business"],
  },
  {
    id: 3,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Email Marketing",
    companyName: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing team",
    keywords: ["Marketing"],
  },
  {
    id: 4,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Visual Designer",
    companyName: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team design new features",
    keywords: ["Design"],
  },
  {
    id: 5,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Product Designer",
    companyName: "ClassPass",
    location: "Manchaster, UK",
    description: "ClassPass is looking for Product Designer to help us design new features",
    keywords: ["Marketing", "Design"],
  },
  {
    id: 6,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Lead Designer",
    companyName: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop new features",
    keywords: ["Design"],
  },
  {
    id: 7,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Brand Strategist",
    companyName: "GoDaddy",
    location: "Marselle, France",
    description: "GoDaddy is looking for Brand Strategist to join their team",
    keywords: ["Marketing"],
  },
  {
    id: 8,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    jobTitle: "Data Analyst",
    companyName: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desing their product.",
    keywords: ["Technology"],
  },

];

const LatestJobs = () => {
  const getKeywordColor = (keyword) => {
    const kw = keyword.toLowerCase();
    if (kw === 'marketing') return 'text-orange-500 border-orange-500/20';
    if (kw === 'design') return 'text-emerald-500 border-emerald-500/20';
    if (kw === 'technology') return 'text-red-500 border-red-500/20';
    if (kw === 'business') return 'text-indigo-500 border-indigo-500/20';
    return 'text-gray-500 border-gray-500/20';
  };

  return (
    <div
      className="relative overflow-hidden bg-[#F8F8FD] [clip-path:polygon(5%_0%,100%_0%,100%_100%,0%_100%,0%_100%,0%_20%)]"
    >
      {/* Background Decorative Lines */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 ">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1000 -100L1600 500" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M1100 -100L1700 500" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M1200 -100L1800 500" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M800 -100L1400 500" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M600 -100L1200 500" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M1440 200L800 800" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M1440 300L900 800" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
          <path d="M1440 100L700 800" stroke="#4640DE" strokeOpacity="0.05" strokeWidth="5" />
        </svg>
      </div>

      <Container className="pt-15 pb-20 relative z-10">
        <div className="flex items-center justify-between">
          <Title>Latest <span className="text-secondary">Jobs open</span></Title>
          <button className='text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:underline underline-offset-8 cursor-pointer'>
            Show all jobs <IoIosArrowRoundForward size={30} />
          </button>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-5 flex items-center gap-5">
              <div className="bg-primary/20 p-2 rounded-full">ico</div>

              <div>
                <h4 className='text font-semibold'>{job.jobTitle}</h4>
                <div className='text-gray-500 flex items-center gap-2 text-sm'>
                  <p>{job.companyName}</p>
                  <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                  <p>{job.location}</p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <p className="text-green-500 bg-green-500/5 p-2 rounded-full text-xs font-semibold">{job.jobType}</p>

                  <span className="text-gray-300 text-xl">|</span>

                  <div className='flex items-center gap-2 flex-wrap'>
                    {job.keywords.map((keyword, i) => (
                      <p
                        key={i}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getKeywordColor(keyword)}`}
                      >
                        {keyword}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>

  );
};

export default LatestJobs;