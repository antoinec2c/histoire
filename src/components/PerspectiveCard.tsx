// src/components/PerspectiveCard.tsx
import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import type { PerspectiveEvent } from '../types/ephemeris';

interface PerspectiveCardProps {
  event: PerspectiveEvent;
}

export const PerspectiveCard: React.FC<PerspectiveCardProps> = ({ event }) => {
  return (
    <div className="bg-[#111622] border border-[#263349] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
      {/* En-tête de perspective */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#1d2738]">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="font-serif font-bold text-xs uppercase tracking-wider text-blue-300">
            {event.scope === 'europe' ? 'Perspective Européenne' : event.scope === 'france' ? 'Perspective Nationale' : 'Perspective Mondiale'}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="font-serif font-bold text-sm text-[#d4af37]">
            {event.yearDisplay}
          </span>
          {event.location && (
            <span className="flex items-center gap-1 text-[#8892a0]">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              <span>{event.location}</span>
            </span>
          )}
        </div>
      </div>

      {/* Titre & Récit de cadrage */}
      <div className="mt-4">
        <h3 className="text-base sm:text-lg font-bold font-title text-white">
          {event.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm font-reading text-[#cbd5e1] leading-relaxed">
          {event.summary}
        </p>
      </div>
    </div>
  );
};
