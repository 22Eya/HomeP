import React from 'react';

const StatCard = ({ title, value, change, icon: Icon, color = "blue" }) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-100 text-blue-600',
    green: 'border-green-500 bg-green-100 text-green-600',
    purple: 'border-purple-500 bg-purple-100 text-purple-600',
    orange: 'border-orange-500 bg-orange-100 text-orange-600',
    red: 'border-red-500 bg-red-100 text-red-600'
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${colorClasses[color].split(' ')[0]} hover:shadow-xl transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          <p className={`text-sm mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change > 0 ? '+' : ''}{change}% ce mois
          </p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color].split(' ')[1]}`}>
          <Icon className={`w-8 h-8 ${colorClasses[color].split(' ')[2]}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;