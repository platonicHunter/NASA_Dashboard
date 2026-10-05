'use client';

import { DataTableProps } from '@/types';
import React from 'react';



export default function DataTable<T extends { id?: string | number }>({
  title,
  columns,
  data,
  loading = false,
}: DataTableProps<T>) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
      {/* Table Header Section */}
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          Total Entries: {data.length}
        </span>
      </div>

      {/* Table Body Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-950 text-slate-400 uppercase border-b border-slate-800">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-3 font-semibold tracking-wider">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500">
                  Fetching NASA Telemetry Records...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500">
                  No telemetry data available.
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr key={row.id || rowIdx} className="hover:bg-slate-800/40 transition-colors">
                  {columns.map((col, colIdx) => (
                   // DataTable.tsx ထဲက Cell Render လုပ်သည့် အပိုင်း
<td key={colIdx} className="px-6 py-4 whitespace-nowrap">
  {typeof col.accessor === 'function' ? (
    col.accessor(row)
  ) : col.accessor === 'status' ? (
    <span
      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
        String(row[col.accessor]) === 'Safe'
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          : String(row[col.accessor]) === 'Tracking'
          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
          : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
      }`}
    >
      {String(row[col.accessor])}
    </span>
  ) : (
    (row[col.accessor] as React.ReactNode)
  )}
</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}