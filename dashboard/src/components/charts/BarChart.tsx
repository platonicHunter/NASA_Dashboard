'use client';

import React from 'react';
import {
  BarChart as RechartsBar,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface BarDataPoint {
  label: string;
  count: number;
}

interface BarChartProps {
  title: string;
  data?: BarDataPoint[];
}

const defaultBarData: BarDataPoint[] = [
  { label: 'Mon', count: 12 },
  { label: 'Tue', count: 19 },
  { label: 'Wed', count: 15 },
  { label: 'Thu', count: 22 },
  { label: 'Fri', count: 30 },
];

export default function BarChart({ title, data = defaultBarData }: BarChartProps) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl shadow-lg space-y-4">
      <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
        {title}
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBar data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="label" stroke="#64748b" fontSize={11} tickLine={false} />
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
            <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </RechartsBar>
        </ResponsiveContainer>
      </div>
    </div>
  );
}