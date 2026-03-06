"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const InputJobSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchTerm") || "");
  
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    if (searchQuery) {
      params.set("searchTerm", searchQuery);
    } else {
      params.delete("searchTerm");
    }
    router.push(`/allJobs?${params.toString()}`);
  };

  const handleChange = (value) => {
    setSearchQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("searchTerm", value);
    } else {
      params.delete("searchTerm");
    }
    router.push(`/allJobs?${params.toString()}`);
  };

  return (
    <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100 flex flex-col md:flex-row items-center gap-4">

      <form onSubmit={handleSearch} className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-4 flex-1 w-full px-2">
        <input
          name="search"
          type="text"
          placeholder="Job title or keyword"
          className="outline-none w-full bg-transparent"
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
        />

        <button className="btn btn-primary text-white px-10">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputJobSearch;