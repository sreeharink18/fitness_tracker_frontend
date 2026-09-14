import { Dumbbell, Play, BarChart2, Layers, Home, Plus } from 'lucide-react';
import '../../index.css'

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#0B111D] border-b border-gray-800">
      <div className="flex items-center space-x-3">
        <div 
         style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00d2ff 0%, #2563eb 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0, 210, 255, 0.4)',
            }}>
          <Dumbbell size={22} color="#06080e" strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-xl font-black text-white tracking-wide">
            AURA <span className="text-color-cyan">FIT</span>
          </h1>
          <p className="text-[12px] text-gray-400 font-semibold tracking-wider">
            STRENGTH & <br /> WORKOUT ENGINE
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs font-semibold rounded-lg border border-gray-700">
          KG
        </button>
        {/* <button
              //onClick={onOpenNewWorkoutModal}
              className="btn btn-primary btn-sm"
              style={{
                gap: '6px',
                padding: '8px 16px',
                //background: 'linear-gradient(135deg, #00d2ff 0%, #2563eb 100%)'
              }}
            >
              <Plus size={16} strokeWidth={2.5} />
              <span>Log Workout</span>
            </button> */}
        <button className="px-3 py-2  text-black font-bold rounded-lg text-xs flex items-center space-x-1 shadow-lg shadow-cyan-500/20"
            style={{
                gap: '6px',
                padding: '8px 16px',
                background: 'linear-gradient(135deg, #00d2ff 0%, #2563eb 100%)'
            }}>
            <Plus size={16} strokeWidth={2.5} />
            <span className='text-sm text-nowrap'>Log Workout</span>
        </button>
      </div>
    </header>
  );
};