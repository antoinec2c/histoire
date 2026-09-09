// src/components/CenturyEchoes.tsx
import React from 'react';
import { Compass, Globe, Landmark } from 'lucide-react';
import type { CenturyEcho, GeographicScope } from '../types/ephemeris';

interface CenturyEchoesProps {
  echoes: CenturyEcho[];
  currentDateFormatted: string;
}

const SCOPE_ICONS: Record<GeographicScope, React.ReactNode> = {
  france: <span title="Théâtre Français">🇫🇷</span>,
  europe: <span title="Théâtre Européen"><Globe className="w-3.5 h-3.5 text-blue-400" /></span>,
  monde: <span title="Théâtre Mondial"><Compass className="w-3.5 h-3.5 text-amber-400" /></span>,
};

export const CenturyEchoes: React.FC<CenturyEchoesProps> = ({ echoes, currentDateFormatted }) => {
  return (
    <section className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[#1f2635]">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-[#d4af37]" />
          <h3 className="font-title font-bold text-base text-white tracking-wide">
            Ce jour-là à travers les siècles
          </h3>
        </div>
        <span className="text-xs text-[#8892a0] font-serif italic">
          Le {currentDateFormatted} dans le temps long
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {echoes.map((echo, index) => (
          <div
            key={index}
            className="p-3.5 rounded-xl bg-[#161c28]/70 border border-[#232c3d] hover:border-[#d4af37]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-serif font-bold text-sm text-[#f6e05e]">
                  {echo.yearDisplay}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#94a3b8]">
                  {SCOPE_ICONS[echo.scope]}
                  <span className="capitalize">{echo.scope}</span>
                </span>
              </div>
              <h4 className="font-semibold text-sm text-white group-hover:text-[#fce09b] transition-colors line-clamp-1">
                {echo.title}
              </h4>
              <p className="mt-1 text-xs text-[#9aa4b2] font-serif leading-relaxed line-clamp-3">
                {echo.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
