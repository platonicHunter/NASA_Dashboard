'use client';

import React, { useState, useEffect } from 'react';
import StatCard from '@/components/cards/StatCard';
import AreaChartFrame from '@/components/charts/AreaChart';
import BarChart from '@/components/charts/BarChart';
import DataTable from '@/components/ui/DataTable';
import { sampleTableData, sampleTableDataHeader } from '@/data/mockData';
import { fetchApod, fetchAsteroids } from '@/lib/api-client';

export default function LiveTelemetryPage() {
  const [asteroidCount, setAsteroidCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // FastAPI / NASA API Data Loading
// FastAPI / NASA API Data Loading
  useEffect(() => {
    async function loadTelemetryData() {
      try {
        setLoading(true);
        const asteroidData = await fetchAsteroids();
        setAsteroidCount(asteroidData?.element_count ?? 14);
      } catch (error) {
        console.error('Failed to fetch telemetry, falling back to mock data:', error);
        setAsteroidCount(14); // Fallback Mock Value
      } finally { // <-- ဒီနေရာမှာ font-mono စား အမှန် 'finally' လို့ ပြောင်းပေးပါ
        setLoading(false);
      }
    }

    loadTelemetryData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Live Telemetry Overview</h1>
          <p className="text-xs text-slate-400 mt-1">Real-time NASA satellite and asteroid streaming metrics.</p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs text-cyan-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>STREAMING ACTIVE</span>
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Near-Earth Objects"
          value={loading ? '...' : (asteroidCount ?? 14)}
          badge="REALTIME"
          subtitle="Tracked Today via NeoWs"
          loading={loading}
        />
        <StatCard
          title="ISS Altitude"
          value="408 km"
          subtitle="Orbit Velocity: 7.66 km/s"
          badge="NORMAL"
        />
        <StatCard
          title="Solar Flare Activity"
          value="Class M"
          subtitle="Minor Geomagnetic Storm"
          badge="WARNING"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AreaChartFrame title="Atmospheric Gas Density" color="#06b6d4" />
        <BarChart title="Asteroid Detections / Day" />
      </div>

      {/* Table Section */}
      <DataTable
        title="Tracked Near-Earth Asteroids"
        data={sampleTableData}
        columns={sampleTableDataHeader}
        loading={loading}
      />
    </div>
  );
}