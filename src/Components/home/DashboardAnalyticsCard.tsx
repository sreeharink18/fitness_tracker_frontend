import React from 'react';

export const DashboardAnalyticsCard = ({ history }) => {
  return (
    <div className="m-4 p-4 bg-[#0b1322] border border-gray-800/80 rounded-2xl space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400">
            📊
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Dashboard & Analytics</h3>
            <p className="text-xs text-gray-400">Volume trends & date-based history</p>
          </div>
        </div>
        <button className="text-xs font-bold text-cyan-400 flex items-center space-x-1">
          <span>Full Stats</span>
          <span>&gt;</span>
        </button>
      </div>

      {/* Analytics Chart Container */}
      <div className="p-4 bg-[#070d18] border border-gray-800/60 rounded-xl space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[10px] font-bold text-gray-400">RECENT VOLUME (KG)</span>
          <span className="text-xs font-bold text-cyan-400">Progression Curve</span>
        </div>
        
        {/* Placeholder for SVG Curve */}
        <div className="h-28 w-full pt-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,35 Q 75,10 125,15 T 200,60 T 300,30 L 300,80 L 0,80 Z"
              fill="url(#gradient)"
            />
            <path
              d="M 0,35 Q 75,10 125,15 T 200,60 T 300,30"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="flex justify-between text-[10px] text-gray-500 font-semibold pt-1">
          <span>Sep 3</span>
          <span>Sep 5</span>
          <span>Sep 7</span>
          <span>Sep 9</span>
          <span>Sep 9</span>
          <span>Sep 9</span>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-gray-400 tracking-wider">
          <span>WORKOUT HISTORY BY DATE</span>
          <span>VOLUME</span>
        </div>

        {history.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-[#0f172a] border border-gray-800/60 rounded-xl">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold rounded-md">
                {item.date}
              </span>
              <div>
                <div className="text-xs font-bold text-white">{item.title}</div>
                <div className="text-[10px] text-gray-400">{item.details}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-black text-cyan-400">{item.volume}</div>
              <div className="text-[10px] text-gray-400">{item.duration}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore button */}
      <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20">
        <span>📅</span>
        <span>Explore Charts & Date History</span>
      </button>
    </div>
  );
};