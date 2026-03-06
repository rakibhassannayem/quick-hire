"use client";

import React, { useState } from 'react';
import { FiTrash2, FiBriefcase, FiMapPin, FiSettings } from "react-icons/fi";

const ManageJobsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Mock Jobs for UI only
  const [jobs, setJobs] = useState([
    { id: 1, jobTitle: 'Senior UI Designer', companyName: 'Dropbox', location: 'San Francisco, US', jobType: 'Full-Time', icon: 'fa-solid fa-code' },
    { id: 2, jobTitle: 'Marketing Manager', companyName: 'Pitch', location: 'Berlin, Germany', jobType: 'Full-Time', icon: 'fa-solid fa-code' },
    { id: 3, jobTitle: 'Full-Stack Developer', companyName: 'Revolut', location: 'Madrid, Spain', jobType: 'Full-Time', icon: 'fa-solid fa-code' },
  ]);

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#25324B]">Manage Job Listings</h1>
          <p className="text-gray-400 mt-2">You have total <span className="text-primary font-bold">{jobs.length}</span> active job postings.</p>
        </div>
        <button className="p-4 bg-primary/10 text-primary rounded-2xl hover:bg-primary/20 transition-all">
          <FiSettings />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">
                  <i className={job.icon}></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#25324B] group-hover:text-primary transition-colors">{job.jobTitle}</h4>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mt-1 font-medium">
                    <span className="flex items-center gap-1.5"><FiBriefcase size={14} className="text-primary" /> {job.companyName}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-1.5"><FiMapPin size={14} className="text-primary" /> {job.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10">
                  {job.jobType}
                </span>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm shadow-red-100"
                  title="Delete Job"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-20 rounded-3xl text-center border border-dashed border-gray-200">
            <p className="text-gray-400">No jobs found. Start by adding one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobsPage;
