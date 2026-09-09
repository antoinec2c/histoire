// src/components/TimelineView.tsx
import React, { useState, useMemo } from 'react';
import { History, ArrowRight, Filter, Calendar } from 'lucide-react';
import type { EphemerisDay, HistoricalEra } from '../types/ephemeris';

interface TimelineViewProps {
  days: Record<string, EphemerisDay>;
  onSelectDay: (dayId: string) => void;
}

interface TimelineItem {
  dayId: string;
  dateFormatted: string;
  year: number;
  yearDisplay: string;
  title: string;
  subtitle: string;
  era: HistoricalEra;
  isMainEvent: boolean;
}

const ERA_FILTERS: { id: HistoricalEra | 'all'; label: string }[] = [
  { id: 'all', label: 'Toutes les Époques' },
  { id: 'antiquite', label: 'Antiquité & Gaule' },
  { id: 'haut_moyen_age', label: 'Haut Moyen Âge' },
  { id: 'moyen_age_feodal', label: 'Moyen Âge Capétien' },
  { id: 'renaissance_moderne', label: 'Renaissance' },
  { id: 'grand_siecle_lumieres', label: 'Grand Siècle' },
  { id: 'revolutions_empires', label: 'Révolution & Empires' },
  { id: 'epoque_contemporaine', label: 'Époque Contemporaine' },
];

export const TimelineView: React.FC<TimelineViewProps> = ({ days, onSelectDay }) => {
  const [selectedEra, setSelectedEra] = useState<HistoricalEra | 'all'>('all');

  // Agréger tous les événements majeurs et échos des siècles dans une chronologie unifiée
  const timelineItems = useMemo(() => {
    const items: TimelineItem[] = [];

    Object.values(days).forEach((day) => {
      // Événement majeur
      items.push({
        dayId: day.id,
        dateFormatted: day.dateFormatted,
        year: day.mainEvent.year,
        yearDisplay: day.mainEvent.yearDisplay,
        title: day.mainEvent.title,
        subtitle: day.mainEvent.subtitle,
        era: day.mainEvent.era,
        isMainEvent: true,
      });

      // Échos des siècles
      day.centuryEchoes.forEach((echo) => {
        items.push({
          dayId: day.id,
          dateFormatted: day.dateFormatted,
          year: echo.year,
          yearDisplay: echo.yearDisplay,
          title: echo.title,
          subtitle: echo.shortDescription,
          era: echo.era,
          isMainEvent: false,
        });
      });
    });

    // Tri chronologique rigoureux (du plus ancien au plus récent)
    items.sort((a, b) => a.year - b.year);

    if (selectedEra === 'all') return items;
    return items.filter((item) => item.era === selectedEra);
  }, [days, selectedEra]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* En-tête de la Frise */}
      <div className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1f2635]">
          <div>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <History className="w-5 h-5" />
              <h2 className="font-title font-bold text-lg sm:text-xl text-white tracking-wide">
                La Grande Frise du Temps Long
              </h2>
            </div>
            <p className="mt-1 text-xs text-[#9aa4b2] font-serif">
              Parcours continu des ruptures géopolitiques et institutionnelles de -44 av. J.-C. à nos jours.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#a0aec0]">
            <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{timelineItems.length} repères répertoriés</span>
          </div>
        </div>

        {/* Boutons de filtres d'époques */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {ERA_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedEra(f.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedEra === f.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8421] text-[#0d1017] font-semibold shadow'
                  : 'bg-[#161c28] border border-[#242c3d] text-[#94a3b8] hover:text-white hover:border-[#4a5568]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ruban chronologique vertical */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#d4af37]/30 space-y-6 ml-3 sm:ml-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Nœud sur la frise */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-3.5 w-4 h-4 rounded-full border-2 transition-all ${
                item.isMainEvent
                  ? 'bg-[#d4af37] border-white shadow-[0_0_10px_rgba(212,175,55,0.7)]'
                  : 'bg-[#182030] border-[#d4af37]/60 group-hover:scale-125'
              }`}
            />

            {/* Carte d'événement */}
            <div
              onClick={() => onSelectDay(item.dayId)}
              className="bg-[#11151f] border border-[#232c3d] hover:border-[#d4af37]/50 rounded-xl p-4 sm:p-5 transition-all shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-base text-[#f6e05e]">
                    {item.yearDisplay}
                  </span>
                  {item.isMainEvent && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#8b1e28]/25 text-[#fca5a5] border border-[#a82b36]/40">
                      Fait Majeur
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[#8892a0]">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{item.dateFormatted}</span>
                </div>
              </div>

              <h3 className="mt-2 text-base font-bold font-title text-white group-hover:text-[#fce09b] transition-colors">
                {item.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-serif text-[#9aa4b2] line-clamp-2 leading-relaxed">
                {item.subtitle}
              </p>

              <div className="mt-3 flex items-center justify-end gap-1 text-xs text-[#d4af37] font-medium group-hover:translate-x-1 transition-transform">
                <span>Lire la fiche du {item.dateFormatted}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
