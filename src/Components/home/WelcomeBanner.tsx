import { Flame, TrendingUp, Calendar, Zap, Trophy } from 'lucide-react';


export const WelcomeBanner = ({ userName, streak }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className="p-4 space-y-3">
         <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '999px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38bdf8',
              fontSize: '0.78rem',
              fontWeight: 600,
              marginBottom: '8px',
            }}
          >
            <Calendar size={13} />
            <span className=''> {formattedDate}</span>
          </div>
      <span className="inline-flex items-center px-3 py-1 bg-gray-900 border border-gray-800 text-cyan-400 rounded-full text-xs font-medium">
        
      </span>
      <div>
        <h2 className="text-2xl font-bold text-white">
          Welcome Back, <span className="text-cyan-400">{userName}</span>
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Track your body splits, crush progressive overload, and monitor your personal records.
        </p>
      </div>

      {/* Streak Badge */}
      <div className="flex items-center space-x-3 p-3 bg-[#0f172a] border border-gray-800 rounded-2xl">
        <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400">
          <Flame size={22} color="#f59e0b" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">{streak} Day Streak</div>
          <div className="text-xs text-gray-400">Consistent & Locked In</div>
        </div>
      </div>
    </div>
  );
};