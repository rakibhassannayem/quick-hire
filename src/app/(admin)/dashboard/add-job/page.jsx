"use client";

import { postJob } from '@/services/jobsServices';
import React, { useState } from 'react';
import { FiPlus, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const AddJobPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    category: 'Technology',
    jobType: 'Full-Time',
    icon: 'fa-solid fa-code',
    description: '',
    keywords: ''
  });

  const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];
  const jobTypes = ["Full-Time", "Part-Time", "Contract", "Internship"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const jobData = {
        ...formData,
        keywords: formData.keywords.split(',').map(kw => kw.trim()).filter(kw => kw !== '')
      }
      await postJob(jobData)
      setMessage({ type: 'success', text: 'Job added successfully!' });

      setFormData({
        jobTitle: '',
        companyName: '',
        location: '',
        category: 'Technology',
        jobType: 'Full-Time',
        icon: 'fa-solid fa-code',
        description: '',
        keywords: ''
      });

      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      console.error('Something went wrong!', error);
      setMessage({ type: 'error', text: 'Failed to post Job. Please try again.' });
    } finally {
      setIsLoading(false);
    }

    // UI Only Mock
    // setTimeout(() => {
    //   setMessage({ type: 'success', text: 'Job added successfully!' });
    //   setIsLoading(false);
    //   setFormData({
    //     jobTitle: '',
    //     companyName: '',
    //     location: '',
    //     jobType: 'Full-Time',
    //     category: 'Technology',
    //     icon: 'fa-solid fa-code',
    //     description: '',
    //     keywords: ''
    //   });
    //   setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    // }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-[#25324B]">Add New Job Listing</h1>
        <p className="text-gray-400 mt-2">Introduce a new career opportunity to the platform.</p>
      </div>

      <form onSubmit={handleAddJob} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Job Title</label>
            <input
              required name="jobTitle" value={formData.jobTitle} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="e.g. Senior Software Engineer"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Company Name</label>
            <input
              required name="companyName" value={formData.companyName} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="e.g. Google"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Location</label>
            <input
              required name="location" value={formData.location} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="e.g. Madrid, Spain"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Job Icon (FontAwesome Class)</label>
            <input
              required name="icon" value={formData.icon} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="fa-solid fa-code"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Category</label>
            <select
              name="category" value={formData.category} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#25324B]">Job Type</label>
            <select
              name="jobType" value={formData.jobType} onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
            >
              {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-[#25324B]">Keywords (Comma separated)</label>
          <input
            required name="keywords" value={formData.keywords} onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Marketing, Design, Remote"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-[#25324B]">Job Description</label>
          <textarea
            required name="description" value={formData.description} onChange={handleChange} rows="5"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
            placeholder="Provide a detailed description of the job..."
          ></textarea>
        </div>

        {message.text && (
          <div className={`my-8 p-4 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
            {message.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
            <span className="font-bold">{message.text}</span>
          </div>
        )}

        <button
          disabled={isLoading}
          className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-70 flex items-center justify-center gap-3"
        >
          {isLoading ? <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : <><FiPlus size={22} /> Publish Job Listing</>}
        </button>
      </form>

    </div>
  );
};

export default AddJobPage;
