'use client';

import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  badge?: string;
  trend?: 'up' | 'down' | 'neutral';
  loading?: boolean;
}

export default function StatCard({
  title,
  value,
  subtitle,
  badge,
  loading = false,
}: StatCardProps) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm">
      {/* Background Accent Gradient Effect */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl -mr-4 -mt-4 pointer-events-none" />

      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </span>
        {badge && (
          <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-mono font-semibold">
            {badge}
          </span>
        )}
      </div>

      <div className="text-3xl font-extrabold text-white font-mono tracking-tight my-1">
        {loading ? (
          <span className="inline-block w-24 h-8 bg-slate-800 animate-pulse rounded" />
        ) : (
          value
        )}
      </div>

      {subtitle && (
        <p className="text-xs text-slate-500 font-mono mt-1">{subtitle}</p>
      )}
    </div>
  );
}