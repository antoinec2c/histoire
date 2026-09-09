// src/components/MainEventCard.tsx
import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, MapPin, Users, Scale, AlertCircle, ArrowRight } from 'lucide-react';
import type { MainEvent, ListeningMode, HistoricalEra } from '../types/ephemeris';

interface MainEventCardProps {
  event: MainEvent;
  listeningMode: ListeningMode;
}

const ERA_LABELS: Record<HistoricalEra, { label: string; color: string }> = {
  antiquite: { label: 'Antiquité Romaine & Gaule', color: 'bg-amber-950/40 text-amber-300 border-amber-800/40' },
  haut_moyen_age: { label: 'Haut Moyen Âge & Carolingiens', color: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40' },
  moyen_age_feodal: { label: 'Moyen Âge Féodal & Capétien', color: 'bg-blue-950/40 text-blue-300 border-blue-800/40' },
  renaissance_moderne: { label: 'Renaissance & Guerres de Religion', color: 'bg-purple-950/40 text-purple-300 border-purple-800/40' },
  grand_siecle_lumieres: { label: 'Grand Siècle & Lumières', color: 'bg-yellow-950/40 text-yellow-300 border-yellow-800/40' },
  revolutions_empires: { label: 'Révolution & Empires', color: 'bg-red-950/40 text-red-300 border-red-800/40' },
  epoque_contemporaine: { label: 'Époque Contemporaine', color: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40' },
};

export const MainEventCard: React.FC<MainEventCardProps> = ({ event, listeningMode }) => {
  const [showAnalysis, setShowAnalysis] = useState<boolean>(true);
  const eraInfo = ERA_LABELS[event.era] || { label: event.era, color: 'bg-slate-800 text-slate-300' };

  return (
    <article className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Bandeau supérieur de contexte */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-[#1f2635] text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Badge Année */}
          <span className="font-serif font-bold text-sm sm:text-base text-[#d4af37] px-2.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/30">
            An {event.yearDisplay}
          </span>
          {/* Badge Époque */}
          <span className={`px-2.5 py-0.5 rounded border text-[11px] font-medium ${eraInfo.color}`}>
            {eraInfo.label}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-1 text-[#8892a0]">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {/* Titre & Sous-titre */}
      <div className="mt-5">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-title text-white leading-tight tracking-wide">
          {event.title}
        </h2>
        <p className="mt-1.5 text-sm sm:text-base font-serif italic text-[#c5a059]">
          {event.subtitle}
        </p>
      </div>

      {/* Personnages clés */}
      {event.keyFigures.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#718096] mr-1">
            <Users className="w-3 h-3" />
            <span>Acteurs :</span>
          </div>
          {event.keyFigures.map((figure) => (
            <span
              key={figure}
              className="px-2 py-0.5 rounded-full bg-[#171d2b] border border-[#263145] text-xs text-[#cbd5e1] font-medium"
            >
              {figure}
            </span>
          ))}
        </div>
      )}

      {/* Récit Historique (Express ou Approfondi) */}
      <div className="mt-6 pt-5 border-t border-[#1a2130]">
        <div className="flex items-center justify-between mb-3 text-xs text-[#718096]">
          <span className="uppercase tracking-wider font-semibold text-[#a0aec0] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
            {listeningMode === 'express' ? 'Récit Historique Synthétique' : 'Grand Récit Géopolitique Approfondi'}
          </span>
          <span className="text-[11px] italic">
            {listeningMode === 'express' ? '~2 minutes de lecture' : '~5 minutes de lecture'}
          </span>
        </div>

        <div className="font-reading text-[#e2e8f0] leading-relaxed whitespace-pre-line space-y-4">
          {listeningMode === 'express' ? event.narrativeExpress : event.narrativeDeepDive}
        </div>
      </div>

      {/* Encadré d'Analyse des Causes Politiques (Méthode Bainville) */}
      <div className="mt-8 rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#141924] to-[#0d1118] overflow-hidden">
        <button
          onClick={() => setShowAnalysis(!showAnalysis)}
          className="w-full px-5 py-3.5 flex items-center justify-between bg-[#192131]/60 hover:bg-[#192131] transition-colors border-b border-[#252f44]"
        >
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-[#d4af37]" />
            <span className="font-serif font-bold text-sm tracking-wide text-[#f6e05e]">
              Analyse des Causes Politiques & Stratégiques
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
            <span>{showAnalysis ? 'Masquer' : 'Déplier l’analyse'}</span>
            {showAnalysis ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {showAnalysis && (
          <div className="p-5 space-y-4 text-xs sm:text-sm">
            {/* 1. Le Motif Réel / Matériel */}
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-amber-950/40 border border-amber-800/40 text-amber-300 flex-shrink-0 mt-0.5">
                <AlertCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-[#fde047] uppercase tracking-wider text-[11px]">
                  1. Le Motif Réel & Matériel (Argent / Frontières / Fiefs)
                </h4>
                <p className="mt-1 text-[#cbd5e1] leading-relaxed font-serif">
                  {event.politicalAnalysis.motive}
                </p>
              </div>
            </div>

            {/* 2. L'Enjeu de Souveraineté */}
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-blue-950/40 border border-blue-800/40 text-blue-300 flex-shrink-0 mt-0.5">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-[#93c5fd] uppercase tracking-wider text-[11px]">
                  2. L'Enjeu Vital (Autorité de l'État contre les Tuteurs Étrangers)
                </h4>
                <p className="mt-1 text-[#cbd5e1] leading-relaxed font-serif">
                  {event.politicalAnalysis.stakes}
                </p>
              </div>
            </div>

            {/* 3. La Conséquence Historique */}
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-[#86efac] uppercase tracking-wider text-[11px]">
                  3. L'Enchaînement Historique & Géopolitique à Long Terme
                </h4>
                <p className="mt-1 text-[#cbd5e1] leading-relaxed font-serif">
                  {event.politicalAnalysis.consequence}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
