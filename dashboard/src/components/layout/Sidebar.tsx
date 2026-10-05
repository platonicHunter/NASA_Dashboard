'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig } from '@/data/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 border-r border-slate-800 min-h-screen p-4 flex flex-col shrink-0">
      {/* Space Apps Brand Header */}
      <div className="flex items-center space-x-3 mb-8 px-2">
        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
          🚀
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-wider text-white leading-tight uppercase">
            NASA Telemetry
          </h1>
          <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
            Space Apps 2026
          </p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-4 flex-1">
        {navigationConfig.map((item) => {
          // Sub-items မပါသော သီးသန့် Link (ဥပမာ- /analytics)
          if (!item.subItems && item.path) {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <span>{item.title}</span>
              </Link>
            );
          }

          // Sub-items ပါသော Group Link များ (ဥပမာ- Overview, Atmosphere)
          return (
            <div key={item.id} className="space-y-1.5">
              <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {item.title}
              </div>
              <div className="pl-3 space-y-1 border-l border-slate-800 ml-2">
                {item.subItems?.map((sub) => {
                  const isActive = pathname === sub.path;
                  return (
                    <Link
                      key={sub.id}
                      href={sub.path}
                      className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-2 border-cyan-400 -ml-px'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{sub.title}</span>
                      {sub.badge && (
                        <span className="text-[9px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">
                          {sub.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}