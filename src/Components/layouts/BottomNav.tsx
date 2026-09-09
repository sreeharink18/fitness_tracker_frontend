import React, { useState } from 'react';

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'Workout', icon: '🏋️' },
    { label: 'Body Parts', icon: '🥞' },
    { label: 'Analytics', icon: '📊' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#070c14]/95 backdrop-blur-md border-t border-gray-800 flex justify-around py-2 max-w-md mx-auto">
      {navItems.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className="flex flex-col items-center space-y-1 relative"
          >
            <span className={`text-lg ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
              {item.icon}
            </span>
            <span className={`text-[10px] font-bold ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
              {item.label}
            </span>
            {isActive && (
              <div className="w-6 h-0.5 bg-cyan-400 rounded-full absolute -bottom-1" />
            )}
          </button>
        );
      })}
    </div>
  );
};