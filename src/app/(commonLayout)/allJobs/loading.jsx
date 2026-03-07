import React from "react";
import Container from "@/components/shared/Container";

const AllJobsSkeleton = () => {
  return (
    <div className="bg-primary/5 min-h-screen pb-20 animate-pulse">
      {/* Search Header Skeleton */}
      <div className="border-b border-gray-100 pt-12 mb-10">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-8"></div>
            <div className="h-14 bg-gray-200 rounded-lg w-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-4"></div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Sidebar Filters Skeleton */}
          <div className="w-full lg:w-1/4 space-y-8">
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Job Listing Skeleton */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="h-8 bg-gray-200 rounded w-40 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 4, 5, 6, 7].map((i) => (
                <div key={i} className="bg-white p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                    <div className="w-20 h-6 bg-gray-100 rounded"></div>
                  </div>

                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-4 bg-gray-100 rounded w-24"></div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-20"></div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-20 h-5 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllJobsSkeleton;
