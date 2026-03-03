import React from 'react';
import Title from './shared/Title';
import Container from './shared/Container';
import { IoIosArrowRoundForward } from "react-icons/io";

const jobs = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    companyName: "Revolut",
    jobTitle: "Email Marketing",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team manage their email marketing campaigns.",
    keywords: ["Marketing", "Design"],
  },
  {
    id: 2,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Brand Designer",
    companyName: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team to design new features",
    keywords: ["Design","Business"],
  },
  {
    id: 3,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Email Marketing",
    companyName: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing team",
    keywords: ["Marketing"],
  },
  {
    id: 4,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Visual Designer",
    companyName: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team design new features",
    keywords: ["Design"],
  },
  {
    id: 5,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Product Designer",
    companyName: "ClassPass",
    location: "Manchaster, UK",
    description: "ClassPass is looking for Product Designer to help us design new features",
    keywords: ["Marketing", "Design"],
  },
  {
    id: 6,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Lead Designer",
    companyName: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop new features",
    keywords: ["Design"],
  },
  {
    id: 7,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Brand Strategist",
    companyName: "GoDaddy",
    location: "Marselle, France",
    description: "GoDaddy is looking for Brand Strategist to join their team",
    keywords: ["Marketing"],
  },
  {
    id: 8,
    icon: "fa-solid fa-code",
    jobType: "Full-time",
    jobTitle: "Data Analyst",
    companyName: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desing their product.",
    keywords: ["Technology"],
  },

];

const FeaturedJobs = () => {
  const getKeywordColor = (keyword) => {
    const kw = keyword.toLowerCase();
    if (kw === 'marketing') return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    if (kw === 'design') return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    if (kw === 'technology') return 'bg-red-500/10 text-red-500 border-red-500/20';
    if (kw === 'business') return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
    return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <Container>
      <div className='flex items-center justify-between'>
        <Title>Featured <span className='text-secondary'>Jobs</span></Title>
        <button className='text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:underline underline-offset-8 cursor-pointer'>
          Show all jobs <IoIosArrowRoundForward size={30} />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {jobs.map((job) => (
          <div key={job.id} className='p-6 cursor-pointer border-2 border-neutral-500/10 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group'>

            <div className='flex items-center justify-between'>
              <i className={`${job.icon} text-primary text-2xl`}></i>
              <p className='text-primary px-3 py-1 border border-primary/20 text-sm font-medium'>{job.jobType}</p>
            </div>

            <div>
              <h4 className='text-xl font-bold text-[#25324B] group-hover:text-primary transition-colors'>{job.jobTitle}</h4>
              <div className='text-gray-400 mt-1 flex items-center gap-2 text-sm'>
                <p>{job.companyName}</p>
                <span className='w-1 h-1 bg-gray-300 rounded-full'></span>
                <p>{job.location}</p>
              </div>
            </div>

            <p className='text-gray-500 line-clamp-2 text-sm leading-relaxed'>{job.description}</p>

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
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJobs;