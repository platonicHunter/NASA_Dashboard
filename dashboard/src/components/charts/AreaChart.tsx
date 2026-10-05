'use client';

import React from 'react';

export default function AreaChartFrame({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
        <span className="text-xs bg-blue-50 text-blue-600 font-mono px-2 py-1 rounded">
          Real-time Stream
        </span>
      </div>

      {/* Chart Canvas Container placeholder */}
      <div className="h-64 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">
        [ Recharts / Chart.js Rendering Frame ]
      </div>
    </div>
  );
}