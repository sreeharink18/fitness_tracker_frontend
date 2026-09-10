import React, { useState } from 'react';
import { Plus, Dumbbell, Layers, ChevronRight, Sparkles, FolderPlus, ArrowRight } from 'lucide-react';

export const CreateWorkoutCard = ({ templates }) => {
  const [selectedId, setSelectedId] = useState(templates[0]?.id);

  return (
    <div className="m-4 p-4 bg-[#0b1322] border border-gray-800/80 rounded-2xl space-y-4">
      {/* Title block */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 text-lg">
             <Plus size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Create Workout</h3>
            <p className="text-xs text-gray-400">Quick routines & workout structure</p>
          </div>
        </div>
        <button className="px-3 py-2 bg-[#091f2e] text-cyan-400 border border-cyan-500/30 rounded-xl text-[11px] font-bold flex items-center space-x-1">
          <Sparkles size={15} />
          <span className='text-[#37b8f2]'>QUICK LAUNCH</span>
        </button>
      </div>

      {/* Structure pill */}
      <div className="flex items-center gap-3 p-3 bg-[#070d18] border border-gray-800/60 rounded-xl text-xs">

        {/* Icon */}
        <Layers size={16} color="#00d2ff" className="shrink-0" />

        {/* Dynamic content */}
        <span className="text-gray-300 font-large min-w-0 flex-1">
          <span className="text-cyan-400 font-bold">7</span> Body Parts •{" "}
          <span className="text-cyan-400 font-bold">18</span> Sub-Parts •{" "}
          <span className="text-cyan-400 font-bold">19</span> Exercises
        </span>

        {/* Manage button */}
        <button className="text-cyan-400 font-bold text-xs flex items-center gap-1 shrink-0">
          <span>Manage</span>
          <ChevronRight size={14} />
        </button>

      </div>

      {/* Template selector */}
      <div className="space-y-2">
        <div className="text-[10px] font-bold text-gray-400 tracking-wider"> SELECT WORKOUT TEMPLATE </div>
      

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

          {templates.map((tpl) => {
            const isSelected = selectedId === tpl.id;

            return (
              <div
                key={tpl.id}
                onClick={() => setSelectedId(tpl.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  backgroundColor: isSelected
                    ? 'rgba(0, 210, 255, 0.08)'
                    : 'rgba(20, 29, 48, 0.5)',
                  border: isSelected
                    ? '1px solid rgba(0, 210, 255, 0.4)'
                    : '1px solid rgba(56, 189, 248, 0.08)',
                  transition: 'all 0.2s',
                }}
              >
                {/* Left side */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  {/* Radio */}
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: isSelected
                        ? '5px solid #00d2ff'
                        : '2px solid #64748b',
                      backgroundColor: isSelected ? '#ffffff' : 'transparent',
                      boxSizing: 'border-box',
                      flexShrink: 0,
                    }}
                  />

                  {/* Template information */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tpl.title}
                    </div>

                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#94a3b8',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tpl.muscles}
                    </div>
                  </div>
                </div>

                {/* Start button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Your start functionality here
                    // handleLaunchTemplate(tpl.id);
                  }}
                  title="Start this template"
                  style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    color: '#38bdf8',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0,
                    marginLeft: '10px',
                  }}
                >
                  Start
                  <ArrowRight size={12} />
                </button>
              </div>
            );
          })}
        </div>

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