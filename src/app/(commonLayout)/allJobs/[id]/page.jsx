import React from 'react';
import Container from "@/components/shared/Container";
import { FiMapPin, FiBriefcase, FiClock, FiLayers, FiCheckCircle } from "react-icons/fi";
import Link from 'next/link';

const getJob = async (id) => {
  const res = await fetch('http://localhost:3000/api/jobs', { cache: 'no-store' });
  const jobs = await res.json();
  return jobs.find(job => job.id === parseInt(id));
}

const JobDetails = async ({ params }) => {
  const { id } = await params;
  const job = await getJob(id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Job Not Found</h2>
          <Link href="/allJobs" className="text-primary hover:underline font-bold">
            Back to All Jobs
          </Link>
        </div>
      </div>
    );
  }

  const getKeywordColor = (keyword) => {
    const kw = keyword.toLowerCase();
    if (kw === 'marketing') return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    if (kw === 'design') return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    if (kw === 'technology') return 'bg-red-500/10 text-red-500 border-red-500/20';
    if (kw === 'business') return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
    return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <div className="bg-primary/5 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 pt-16 pb-12 transition-all duration-500">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-4xl shadow-sm border border-primary/5 transition-transform hover:scale-105 duration-300">
                <i className={job.icon}></i>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold text-[#25324B] tracking-tight">
                  {job.jobTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-[#515B6F] font-medium">
                  <span className="hover:text-primary cursor-pointer transition-colors">{job.companyName}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1.5">
                    <FiBriefcase className="text-primary" />
                    <span>{job.jobType}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 transform">
                Apply Now
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-12">
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#25324B] mb-6 border-l-4 border-primary pl-4">Description</h3>
              <p className="text-[#515B6F] leading-relaxed text-lg">
                {job.description}
                <br /><br />
                We are looking for a highly motivated and talented professional to join our growing team. As a key member of our organization, you will have the opportunity to make a significant impact on our products and help shape the future of our industry.
              </p>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#25324B] mb-6 border-l-4 border-primary pl-4">Responsibilities</h3>
              <ul className="space-y-4">
                {[
                  "Collaborate with cross-functional teams to define and implement new features",
                  "Write clean, maintainable, and efficient code",
                  "Participate in code reviews and contribute to technical discussions",
                  "Troubleshoot and debug issues in a timely manner",
                  "Stay up-to-date with the latest industry trends and technologies"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#515B6F] text-lg">
                    <FiCheckCircle className="text-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#25324B] mb-6 border-l-4 border-primary pl-4">Requirements</h3>
              <ul className="space-y-4">
                {[
                  "Proven experience in a similar role",
                  "Strong problem-solving and analytical skills",
                  "Excellent communication and collaboration abilities",
                  "Proficiency in relevant tools and technologies",
                  "Ability to work independently and as part of a team"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#515B6F] text-lg">
                    <FiCheckCircle className="text-primary mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-8">
              <h3 className="text-xl font-bold text-[#25324B] mb-8 pb-4 border-b border-gray-50">Job Overview</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Job Posted</p>
                    <p className="font-bold text-[#25324B]">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiLayers className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Job Category</p>
                    <p className="font-bold text-[#25324B]">{job.category || 'N/A'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiBriefcase className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Job Type</p>
                    <p className="font-bold text-[#25324B]">{job.jobType}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-50">
                <h4 className="text-sm font-bold text-[#25324B] mb-4 uppercase tracking-wider">Skills</h4>
                <div className="flex flex-wrap gap-2.5">
                  {job.keywords.map((kw, i) => (
                    <span key={i} className={`px-4 py-2 rounded-lg text-sm font-bold border ${getKeywordColor(kw)} transition-transform hover:scale-105 cursor-default`}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full mt-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                Contact Company
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetails;
