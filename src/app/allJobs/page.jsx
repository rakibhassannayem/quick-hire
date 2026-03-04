"use client";

import React, { useState, useEffect } from "react";
import { FiSearch, FiMapPin, FiFilter } from "react-icons/fi";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";

const jobsData = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    jobType: "Full-Time",
    companyName: "Revolut",
    jobTitle: "Email Marketing",
    location: "Madrid, Spain",
    category: "Marketing",
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
    category: "Design",
    description: "Dropbox is looking for Brand Designer to help the team to design new features",
    keywords: ["Design", "Business"],
  },
  {
    id: 3,
    icon: "fa-solid fa-code",
    jobType: "Part-Time",
    jobTitle: "Email Marketing",
    companyName: "Pitch",
    location: "Berlin, Germany",
    category: "Marketing",
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
    category: "Design",
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
    category: "Design",
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
    category: "Engineering",
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
    category: "Marketing",
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
    category: "Technology",
    description: "Twitter is looking for Data Analyst to help team desing their product.",
    keywords: ["Technology"],
  },
];

const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];
const jobTypes = ["Full-Time", "Part-Time", "Remote", "Internship"];

const AllJobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    const filtered = jobsData.filter((job) => {
      const matchesSearch = job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
      const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);

      return matchesSearch && matchesLocation && matchesCategory && matchesJobType;
    });
    setFilteredJobs(filtered);
  }, [searchQuery, locationQuery, selectedCategories, selectedJobTypes]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleJobType = (jobType) => {
    setSelectedJobTypes(prev =>
      prev.includes(jobType) ? prev.filter(t => t !== jobType) : [...prev, jobType]
    );
  };

  const getKeywordColor = (keyword) => {
    const kw = keyword.toLowerCase();
    if (kw === 'marketing') return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    if (kw === 'design') return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    if (kw === 'technology') return 'bg-red-500/10 text-red-500 border-red-500/20';
    if (kw === 'business') return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
    return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <div className="bg-[#FBFCFF] min-h-screen pb-20">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-100 py-12 mb-10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#25324B] mb-8 text-center">
              Find your <span className="text-[#26A4FF]">dream job</span>
            </h1>
            <div className="bg-white p-3 shadow-xl rounded-lg border border-gray-100 flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-4 flex-1 w-full px-2">
                <FiSearch className="text-[#4640DE] text-xl" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="outline-none w-full text-sm text-[#7C8493] bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 border-b md:border-none border-gray-100 pb-3 md:pb-0 flex-1 w-full px-2">
                <FiMapPin className="text-[#4640DE] text-xl" />
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none w-full text-sm text-[#7C8493] bg-transparent"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
              <button className="bg-[#4640DE] text-white px-10 py-3 font-bold hover:bg-[#3b36c4] transition-all w-full md:w-auto rounded-md shadow-lg shadow-blue-500/20">
                Search
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Popular: UI Designer, UX Researcher, Android, Admin
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#25324B] mb-4 flex items-center gap-2">
                <FiFilter className="text-primary" /> Filter by Category
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary accent-primary"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-[#515B6F] group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#25324B] mb-4">Job Type</h3>
              <div className="space-y-3">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary accent-primary"
                      checked={selectedJobTypes.includes(type)}
                      onChange={() => toggleJobType(type)}
                    />
                    <span className="text-[#515B6F] group-hover:text-primary transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Job Listing */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#25324B]">All Jobs</h2>
                <p className="text-gray-500">Showing {filteredJobs.length} results</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <select className="bg-transparent font-semibold text-[#25324B] outline-none cursor-pointer">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                        <i className={job.icon}></i>
                      </div>
                      <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold border border-primary/10">
                        {job.jobType}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#25324B] group-hover:text-primary transition-colors mb-1">
                      {job.jobTitle}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <span>{job.companyName}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{job.location}</span>
                    </div>

                    <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.keywords.map((kw, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getKeywordColor(kw)}`}>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 text-center border border-dashed border-gray-200 rounded-xl">
                <FiSearch className="mx-auto text-5xl text-gray-200 mb-4" />
                <h3 className="text-xl font-bold text-gray-400">No jobs found</h3>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search keywords</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setLocationQuery("");
                    setSelectedCategories([]);
                    setSelectedJobTypes([]);
                  }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllJobs;
