import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 px-6 py-4 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0">
      {/* Developed By Team Credits */}
      <div className="flex items-center space-x-2">
        <span>Developed with ❤️ for NASA Space Apps Challenge by</span>
        <span className="font-semibold text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer">
          Team [အသင်းနာမည်]
        </span>
      </div>

      {/* Team Members List / GitHub / NASA Credits */}
      <div className="flex items-center space-x-4 text-[11px] font-mono">
        <span className="text-slate-500">Members: Member 1, Member 2, Member 3</span>
        <span className="text-slate-700">|</span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:underline flex items-center gap-1"
        >
          <span>GitHub Repo</span>
        </a>
        <span className="text-slate-700">|</span>
        <span className="text-slate-400">Data Source: NASA Open APIs</span>
      </div>
    </footer>
  );
}