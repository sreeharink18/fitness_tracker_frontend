import React, { useState } from 'react';

export const CreateWorkoutCard = ({ templates }) => {
  const [selectedId, setSelectedId] = useState(templates[0]?.id);

  return (
    <div className="m-4 p-4 bg-[#0b1322] border border-gray-800/80 rounded-2xl space-y-4">
      {/* Title block */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 text-lg">
            +
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Create Workout</h3>
            <p className="text-xs text-gray-400">Quick routines & workout structure</p>
          </div>
        </div>
        <button className="px-3 py-2 bg-[#091f2e] text-cyan-400 border border-cyan-500/30 rounded-xl text-[10px] font-bold flex items-center space-x-1">
          <span>✨</span>
          <span>QUICK LAUNCH</span>
        </button>
      </div>

      {/* Structure pill */}
      <div className="flex items-center justify-between p-3 bg-[#070d18] border border-gray-800/60 rounded-xl text-xs">
        <span className="text-gray-300 font-medium">
          <span className="text-cyan-400 font-bold">7</span> Body Parts • <span className="text-cyan-400 font-bold">18</span> Sub-Parts • <span className="text-cyan-400 font-bold">19</span> Exercises
        </span>
        <button className="text-cyan-400 font-bold text-xs flex items-center space-x-0.5">
          <span>Manage</span>
          <span>&gt;</span>
        </button>
      </div>

      {/* Template selector */}
      <div className="space-y-2">
        <div className="text-[10px] font-bold text-gray-400 tracking-wider">SELECT WORKOUT TEMPLATE</div>
        {templates.map((tpl) => {
          const isSelected = selectedId === tpl.id;
          return (
            <div
              key={tpl.id}
              onClick={() => setSelectedId(tpl.id)}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border transition-all ${
                isSelected
                  ? 'bg-[#0f1d30] border-cyan-500/60'
                  : 'bg-[#0f172a] border-gray-800/60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-gray-500'}`}>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{tpl.title}</div>
                  <div className="text-[10px] text-gray-400">{tpl.muscles}</div>
                </div>
              </div>
              <button className="px-3 py-1 bg-[#0a2336] border border-cyan-500/40 text-cyan-400 rounded-lg text-xs font-bold">
                Start →
              </button>
            </div>
          );
        })}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button className="py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-xs flex items-center justify-center space-x-1 shadow-lg shadow-cyan-500/20">
          <span>🏋️</span>
          <span>Start Selected</span>
        </button>
        <button className="py-2.5 bg-[#121c2e] hover:bg-gray-800 text-white font-bold rounded-xl text-xs border border-gray-700">
          Blank Session
        </button>
        <button className="py-2 bg-[#0a1526] text-cyan-400 rounded-xl text-xs font-bold border border-cyan-500/30">
          + Add Exercise
        </button>
        <button className="py-2 bg-[#0a1526] text-cyan-400 rounded-xl text-xs font-bold border border-cyan-500/30">
          📋 Edit Structure
        </button>
      </div>
    </div>
  );
};