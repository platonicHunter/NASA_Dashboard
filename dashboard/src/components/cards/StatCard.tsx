'use client';

import { trendConfig } from '@/lib/utils';
import { StatCardProps } from '@/types';
import React from 'react';



export default function StatCard({
  title,
  value,
  subtitle,
  badge,
  trend,
  loading = false,
}: StatCardProps) {
  
  const renderTrend = () => {
    if (!trend) return null;
    

    const config = trendConfig[trend];

    return (
      <span
        className={`inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${config.color}`}
      >
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </span>
    );
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl -mr-4 -mt-4 pointer-events-none" />

      {/* Header Row: Title, Badge and Trend */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </span>
        
        <div className="flex items-center gap-1.5">
          {/* Trend Indicator (မရှိပါက null ပြပြီး ပျောက်နေပါမည်) */}
          {renderTrend()}

          {/* Badge */}
          {badge && (
            <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-mono font-semibold">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Main Value */}
      <div className="text-3xl font-extrabold text-white font-mono tracking-tight my-1">
        {loading ? (
          <span className="inline-block w-24 h-8 bg-slate-800 animate-pulse rounded" />
        ) : (
          value
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs text-slate-500 font-mono mt-1">{subtitle}</p>
      )}
    </div>
  );
}