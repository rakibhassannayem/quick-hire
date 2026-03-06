import { FiBriefcase, FiUsers, FiEye, FiBarChart2 } from 'react-icons/fi';

const StatCard = ({ title, value, icon, color, trend }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${color}`}>
        {icon}
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-[#25324B] mt-1">{value}</p>
  </div>
);

const DashboardPage = () => {
  const stats = [
    {
      title: 'Total Jobs Posted',
      value: '124',
      icon: <FiBriefcase size={24} />,
      color: 'bg-blue-500 shadow-blue-500/20',
      trend: '+12% this month'
    },
    {
      title: 'Total Applications',
      value: '3,582',
      icon: <FiUsers size={24} />,
      color: 'bg-primary shadow-primary/20',
      trend: '+18% this month'
    },
    {
      title: 'Job Views',
      value: '45.2k',
      icon: <FiEye size={24} />,
      color: 'bg-orange-500 shadow-orange-500/20',
      trend: '+5% this month'
    },
    {
      title: 'Active Campaigns',
      value: '12',
      icon: <FiBarChart2 size={24} />,
      color: 'bg-purple-500 shadow-purple-500/20',
      trend: '0% this month'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#25324B]">Welcome back, Admin!</h1>
        <p className="text-[#515B6F] mt-2">Here's what's happening with your job listings today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Placeholder for more content to show layout working */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-[#25324B] mb-4">Recent Activity</h2>
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