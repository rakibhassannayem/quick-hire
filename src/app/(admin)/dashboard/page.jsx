"use client";

import React from 'react';
import { FiActivity, FiUsers, FiBriefcase, FiArrowUpRight } from "react-icons/fi";

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Jobs', count: '124', icon: <FiBriefcase />, color: 'bg-primary' },
    { label: 'Active Applications', count: '450', icon: <FiActivity />, color: 'bg-secondary' },
    { label: 'Total Users', count: '1,200', icon: <FiUsers />, color: 'bg-indigo-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-[#25324B]">Welcome back, Admin!</h1>
        <p className="text-gray-400 mt-2 text-lg">Here's what's happening with your job portal today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${stat.color} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-emerald-500 font-bold flex items-center gap-1 text-sm bg-emerald-50 px-3 py-1 rounded-full">
                +12% <FiArrowUpRight />
              </span>
            </div>
            <h3 className="text-4xl font-black text-[#25324B] mb-1">{stat.count}</h3>
            <p className="text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-[#25324B] mb-6">Recent Activity</h3>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary">
                  <FiBriefcase />
                </div>
                <div>
                  <p className="font-bold text-[#25324B]">New job posted: "Senior Product Designer"</p>
                  <p className="text-sm text-gray-400">2 hours ago</p>
                </div>
              </div>
              <button className="text-primary font-bold hover:underline">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
