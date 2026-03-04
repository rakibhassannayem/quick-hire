import React from 'react';
import Container from './shared/Container';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});


const Hero = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#F8F8FD] [clip-path:polygon(0%_0%,100%_0%,100%_70%,80%_100%,0%_100%,0%_35%)]"
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

      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between min-h-[500px] relative z-10'>
          {/* Left Content */}
          <div className='max-w-xl w-full text-center md:text-left'>
            <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-extrabold text-[#25324B] mb-6`}>
              Discover <br /> more than <br />
              <span className='relative inline-block text-[#26A4FF]'>
                5000+ Jobs
                <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M3 5.5C118.333 1.5 233.667 1.5 355 5.5C280 9.5 140 10.5 3 11" stroke="#26A4FF" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className='text-lg text-neutral-500/80 mb-8'>
              Great platform for the job seeker that searching for <br className="hidden md:block" />
              new career heights and passionate about startups.
            </p>

            {/* Search Bar */}
            <div className='bg-white p-3 shadow-xl flex flex-col md:flex-row items-center gap-4 mb-6 rounded-md border border-gray-100'>
              <div className='flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-4 flex-1 w-full'>
                <FiSearch className="text-[#4640DE] text-xl" />
                <input type="text" placeholder='Job title or keyword' className='outline-none w-full text-sm text-[#7C8493] bg-transparent' />
              </div>
              <div className='flex items-center gap-2 border-b md:border-none border-gray-100 pb-3 md:pb-0 flex-1 w-full'>
                <FiMapPin className="text-[#4640DE] text-xl" />
                <select className='outline-none w-full text-sm text-[#25324B] bg-transparent cursor-pointer'>
                  <option>Florence, Italy</option>
                </select>
              </div>
              <button className='bg-[#4640DE] text-white px-8 py-3 font-bold hover:bg-[#3b36c4] transform hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto rounded-none shadow-lg shadow-blue-500/20'>
                Search my job
              </button>
            </div>

            <p className='text-black text-sm'>
              <span className='opacity-70 font-bold'>Popular :</span> UI Designer, UX Researcher, Android, Admin
            </p>
          </div>

          {/* image */}
          <div className='hidden md:block w-1/2'>
            <img src="/heroimage.png" alt="hero" className='w-[80%]' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;