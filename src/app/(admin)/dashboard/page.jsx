import StatCard from '@/components/dashboard/StatCard';
import { getAllApplications } from '@/services/applicationServices';
import { getAllJobs } from '@/services/jobsServices';
import { FiBriefcase, FiUsers } from 'react-icons/fi';

export const dynamic = 'force-dynamic'

const DashboardPage = async () => {
  const jobs = await getAllJobs();
  const applications = await getAllApplications();

  const stats = [
    {
      title: 'Total Jobs Posted',
      value: jobs?.length || 0,
      icon: <FiBriefcase size={24} />,
      color: 'bg-blue-500 shadow-blue-500/20',
      trend: '+12% this month'
    },
    {
      title: 'Total Applications',
      value: applications?.length || 0,
      icon: <FiUsers size={24} />,
      color: 'bg-primary shadow-primary/20',
      trend: '+18% this month'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Admin!</h1>
        <p className="text-gray-500 mt-2">Here's what's happening with your job listings today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Placeholder for more content to show layout working */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <FiUsers />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#25324B]">New applicant for "Senior React Developer"</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">Review</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;