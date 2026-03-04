"use client"

import { useState } from "react";

const InputJobSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="btn btn-primary text-white px-10">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputJobSearch;