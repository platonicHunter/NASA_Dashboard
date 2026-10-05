'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import AreaChartFrame from '@/components/charts/AreaChart';

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('overview');
  const [activeSubNav, setActiveSubNav] = useState('live-telemetry');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation Frame */}
      <Sidebar
        activeNav={activeNav}
        activeSubNav={activeSubNav}
        onSelectNav={setActiveNav}
        onSelectSubNav={setActiveSubNav}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span className="capitalize">{activeNav}</span>
            <span>/</span>
            <span className="font-semibold text-blue-600 capitalize">
              {activeSubNav.replace('-', ' ')}
            </span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            System Status: <span className="text-emerald-500 font-bold">ONLINE</span>
          </div>
        </header>

        {/* Dashboard Content Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AreaChartFrame title="Atmospheric Gas Density" />
            <AreaChartFrame title="Orbital Velocity Stream" />
          </div>
        </div>
      </main>
    </div>
  );
}