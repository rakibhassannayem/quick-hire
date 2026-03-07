import React from 'react';

const StatCard = ({ title, value, icon, color, trend }) => {
  return (
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
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default StatCard;