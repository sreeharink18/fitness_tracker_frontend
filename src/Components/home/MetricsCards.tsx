import { Flame, TrendingUp, Calendar, Zap, Trophy } from 'lucide-react';

export const MetricsCards = ({ metrics }) => {
  return (
    <div className="px-4 space-y-3">
      {/* 7-Day Volume */}
      <div className="flex items-center space-x-4 p-4 bg-[#0f172a] border border-gray-800/80 rounded-2xl">
        <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400">
            <TrendingUp size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">7-Day Total Volume</div>
          <div className="text-xl font-black text-white">{metrics.totalVolume7Day}</div>
        </div>
      </div>

      {/* Workouts This Week */}
      <div className="flex items-center space-x-4 p-4 bg-[#0f172a] border border-gray-800/80 rounded-2xl">
        <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
            <Zap size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Workouts This Week</div>
          <div className="text-xl font-black text-white">{metrics.workoutsThisWeek} <span className="text-xs font-normal text-gray-400">Sessions</span></div>
        </div>
      </div>

      {/* Active Exercises */}
      <div className="flex items-center space-x-4 p-4 bg-[#0f172a] border border-gray-800/80 rounded-2xl">
        <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400">
          <Trophy size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Active Exercises</div>
          <div className="text-xl font-black text-white">{metrics.activeExercises} <span className="text-xs font-normal text-gray-400">across {metrics.bodyPartsCount} parts</span></div>
        </div>
      </div>
    </div>
  );
};