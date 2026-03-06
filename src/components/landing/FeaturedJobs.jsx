import React from 'react';
import Title from '../shared/Title';
import Container from '../shared/Container';
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const FeaturedJobs = ({ jobs = [] }) => {
  const getKeywordColor = (keyword) => {
    const kw = keyword?.toLowerCase();
    if (kw === 'marketing') return 'text-orange-500 border-orange-500/20';
    if (kw === 'design') return 'text-emerald-500 border-emerald-500/20';
    if (kw === 'technology') return 'text-red-500 border-red-500/20';
    if (kw === 'business') return 'text-indigo-500 border-indigo-500/20';
    return 'text-gray-500 border-gray-500/20';
  };

  return (
    <Container>
      <div className='flex items-center justify-between'>
        <Title>Featured <span className='text-secondary'>Jobs</span></Title>
        <Link href="/allJobs" className='text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:underline underline-offset-8 cursor-pointer'>
          Show all jobs <IoIosArrowRoundForward size={30} />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {jobs.slice(0, 8).map((job) => (
          <Link href={`/allJobs/${job._id}`} key={job._id} className='p-6 cursor-pointer border-2 border-neutral-500/10 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group'>

            <div className='flex items-center justify-between'>
              <div className="w-10 h-10 overflow-hidden">
                <img src={job.logo} alt={job.companyName} className="w-full h-full object-contain" />
              </div>
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
              <p
                className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getKeywordColor(job.category)}`}
              >
                {job.category}
              </p>
            </div>

          </Link>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJobs;