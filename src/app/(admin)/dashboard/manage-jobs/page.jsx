"use client";

import { getAllJobs, deleteJob } from '@/services/jobsServices';
import React, { useEffect, useState } from 'react';
import { FiTrash2, FiBriefcase, FiMapPin, FiSettings } from "react-icons/fi";

const ManageJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this job?')) return;

    try {
      await deleteJob(id);
      setJobs(prev => prev.filter(job => job._id !== id));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

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
            <div key={job._id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
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
                  onClick={() => handleDelete(job._id)}
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
            <FiBriefcase className="mx-auto text-5xl text-gray-200 mb-4" />
            <h3 className="text-xl font-bold text-gray-400">No jobs found</h3>
            <p className="text-gray-400 mt-2">Start by adding your first job listing!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobsPage;
