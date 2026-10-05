'use client';

import React, { useState } from 'react';
import { navigationConfig } from '@/data/navigation';
import { NavItem } from '@/types';

export default function Sidebar({
  activeNav,
  activeSubNav,
  onSelectNav,
  onSelectSubNav,
}: {
  activeNav: string;
  activeSubNav: string;
  onSelectNav: (id: string) => void;
  onSelectSubNav: (id: string) => void;
}) {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col border-r border-slate-800">
      {/* Brand / Logo */}
      <div className="p-5 border-b border-slate-800 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
          N
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide">NASA SPACE APPS</h1>
          <p className="text-xs text-blue-400 font-mono">Telemetry Dashboard</p>
        </div>
      </div>

      {/* Dynamic Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationConfig.map((item: NavItem) => {
          const isActive = activeNav === item.id;

          return (
            <div key={item.id} className="space-y-1">
              {/* Main Nav Item */}
              <button
                onClick={() => {
                  onSelectNav(item.id);
                  if (item.subItems && item.subItems.length > 0) {
                    onSelectSubNav(item.subItems[0].id);
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{item.title}</span>
              </button>

              {/* Sub Nav Items (If Active & Has SubItems) */}
              {isActive && item.subItems && (
                <div className="ml-4 pl-3 border-l border-blue-500/30 space-y-1 my-1">
                  {item.subItems.map((sub) => {
                    const isSubActive = activeSubNav === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectSubNav(sub.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                          isSubActive
                            ? 'bg-blue-500/20 text-blue-300 font-semibold'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                        }`}
                      >
                        <span>{sub.title}</span>
                        {sub.badge && (
                          <span className="text-[10px] bg-blue-500/30 text-blue-300 px-1.5 py-0.5 rounded">
                            {sub.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}