import { FiSearch, FiFilter } from "react-icons/fi";
import Container from "@/components/shared/Container";
import InputJobSearch from "@/components/InputJobSearch";
import Link from "next/link";

export const metadata = {
  title: "All Jobs",
}

const getJobs = async () => {
  const res = await fetch('http://localhost:3000/api/jobs');
  return await res.json()
}

const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

const AllJobs = async() => {
  const jobs = await getJobs();

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
      {/* Search Header */}
      <div className="border-b border-gray-100 pt-12 mb-10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Find your <span className="text-secondary">dream job</span>
            </h1>
            <InputJobSearch />
            <p className="mt-4 text-gray-400 text-center">
              Popular: UI Designer, UX Researcher, Android, Admin
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-5">
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
                      // checked={selectedCategories.includes(cat)}
                      // onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-[#515B6F] group-hover:text-primary transition-colors">{cat}</span>
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
                <p className="text-gray-500">Showing {jobs.length} results</p>
              </div>
            </div>

            {jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <Link href={`/allJobs/${job.id}`} key={job.id} className="bg-white p-6 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer">
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
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 text-center border border-dashed border-gray-200 rounded-xl">
                <FiSearch className="mx-auto text-5xl text-gray-200 mb-4" />
                <h3 className="text-xl font-bold text-gray-400">No jobs found</h3>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search keywords</p>
                <button
                  // onClick={() => {
                  //   setSearchQuery("");
                  //   setLocationQuery("");
                  //   setSelectedCategories([]);
                  //   setSelectedJobTypes([]);
                  // }}
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
