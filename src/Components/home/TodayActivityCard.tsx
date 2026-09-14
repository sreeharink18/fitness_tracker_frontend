import { Activity, Dumbbell, Play, CheckCircle2, PlusCircle,Plus, DumbbellIcon } from 'lucide-react';

export const TodayActivityCard = ({ activity }) => {
  return (
    <div className="m-4 p-4 bg-[#0b1322] border border-gray-800/80 rounded-2xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400">
           <Activity size={20}/>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Today's Activity</h3>
            <p className="text-xs text-gray-400">Exercises & workout progress today</p>
          </div>
        </div>
        <span className="px-2.5 py-1 text-[10px] font-bold tracking-wide rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          ✓ {activity.status}
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-[#070d18] rounded-xl border border-gray-800/50 text-center">
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase">Volume</div>
          <div className="text-sm font-black text-color-cyan">{activity.volume}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase">Sets Done</div>
          <div className="text-sm font-black text-white">{activity.setsDone} <span className="text-[10px] font-normal">sets</span></div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase">Exercises</div>
          <div className="text-sm font-black text-white">{activity.exercisesCount}</div>
        </div>
      </div>

      {/* Exercises list */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-gray-400 tracking-wider">
          <span>EXERCISES PERFORMED</span>
          <span>PEAK LOAD</span>
        </div>

        {activity.exercisesPerformed.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-[#0f172a] border border-gray-800/60 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-color-cyan flex items-center justify-center text-xs">
                <DumbbellIcon size={20}/>
              </div>
              <div>
                <div className="text-[14px] font-bold text-white">{item.name}</div>
                <div className="text-[11px] text-gray-300">{item.sets}</div>
              </div>
            </div>
            <div className="text-xs font-black text-color-cyan">{item.peakLoad}</div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
         <button className="px-3 py-2  text-black font-bold rounded-lg text-xs flex items-center space-x-1 shadow-lg shadow-cyan-500/20"
            style={{
                gap: '6px',
                padding: '8px 16px',
                background: 'linear-gradient(135deg, #00ffff 0%, #0269be 100%)'
            }}>
            <Plus size={16} strokeWidth={2.5} />
            <span className='text-sm text-nowrap'>Log Workout</span>
        </button>
        <button className="py-2.5 bg-[#121c2e] hover:bg-gray-800 text-white font-bold rounded-xl text-xs border border-gray-700">
          View History
        </button>
      </div>
    </div>
  );
};