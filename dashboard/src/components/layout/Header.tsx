'use client';


export default function Header() {
 

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 flex items-center justify-between shrink-0 sticky top-0 z-10">
      {/* Challenge Track Info */}
      <div className="flex items-center space-x-3">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          NASA Space Apps Challenge 2026
        </span>
        <span className="text-slate-500 text-sm">|</span>
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          Track: Earth & Space Telemetry
        </span>
      </div>

      {/* Live Mission Clock & Team Badge */}
      <div className="flex items-center space-x-6">
        

        {/* Team Profile / Developed By */}
        <div className="flex items-center space-x-3 pl-4 border-l border-slate-800">
          <div className="text-right">
            <p className="text-xs font-bold text-white leading-none">Team [အသင်းနာမည်]</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Space Apps Finalist</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xs text-white shadow-md shadow-cyan-500/20">
            SA
          </div>
        </div>
      </div>
    </header>
  );
}