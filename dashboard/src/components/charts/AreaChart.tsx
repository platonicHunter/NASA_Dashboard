'use client';

import React from 'react';
import {
  AreaChart as RechartsArea,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  time: string;
  value: number;
}

interface AreaChartFrameProps {
  title: string;
  data?: DataPoint[];
  color?: string;
}

const defaultData: DataPoint[] = [
  { time: '00:00', value: 340 },
  { time: '04:00', value: 410 },
  { time: '08:00', value: 380 },
  { time: '12:00', value: 460 },
  { time: '16:00', value: 420 },
  { time: '20:00', value: 510 },
];

export default function AreaChartFrame({
  title,
  data = defaultData,
  color = '#06b6d4', // Cyan accent
}: AreaChartFrameProps) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
          {title}
        </h3>
        <span className="flex items-center space-x-1.5 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE STREAM</span>
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsArea data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#f8fafc',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#gradient-${title})`}
            />
          </RechartsArea>
        </ResponsiveContainer>
      </div>
    </div>
  );
}