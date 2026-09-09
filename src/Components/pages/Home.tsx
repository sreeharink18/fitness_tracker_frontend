import React, { useEffect, useState } from 'react';
import mockData from '../../Data/dashboardData.json';

import { Navbar } from '../layouts/Navbar';
import { WelcomeBanner } from '../home/WelcomeBanner';
import { MetricsCards } from '../home/MetricsCards';
import { TodayActivityCard } from '../home/TodayActivityCard';
import { CreateWorkoutCard } from '../home/CreateWorkoutCard';
import { DashboardAnalyticsCard } from '../home/DashboardAnalyticsCard';
import { BottomNav } from '../layouts/BottomNav';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating API fetch using local JSON dummy data
    setData(mockData);
  }, []);

  if (!data) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#070c14] text-white pb-20 max-w-md mx-auto font-sans border-x border-gray-800">
      {/* Sticky top header */}
      <Navbar />

      {/* Main scrollable body */}
      <main className="space-y-2">
        <WelcomeBanner userName={data.user.name} streak={data.user.streak} />
        <MetricsCards metrics={data.metrics} />
        <TodayActivityCard activity={data.todayActivity} />
        <CreateWorkoutCard templates={data.workoutTemplates} />
        <DashboardAnalyticsCard history={data.workoutHistory} />
      </main>

      {/* Fixed bottom navbar */}
      <BottomNav />
    </div>
  );
};

export default Home;