// src/components/Header.tsx
import React from 'react';
import { Calendar, Clock, Bookmark, Sparkles, History, Sun, Moon } from 'lucide-react';
import type { ListeningMode, EphemerisDay } from '../types/ephemeris';

interface HeaderProps {
  currentDay: EphemerisDay;
  availableDays: Record<string, EphemerisDay>;
  onSelectDay: (id: string) => void;
  listeningMode: ListeningMode;
  onToggleListeningMode: (mode: ListeningMode) => void;
  activeTab: 'ephemeris' | 'timeline' | 'cabinet';
  onSelectTab: (tab: 'ephemeris' | 'timeline' | 'cabinet') => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  bookmarkCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDay,
  availableDays,
  onSelectDay,
  listeningMode,
  onToggleListeningMode,
  activeTab,
  onSelectTab,
  isBookmarked,
  onToggleBookmark,
  bookmarkCount,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="border-b border-[#262c3a] bg-[#0c0f16]/95 backdrop-blur-md sticky top-0 z-40">
      {/* Barre supérieure : Marque & Navigation rapide */}
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between border-b border-[#1b202c] text-xs text-[#9aa4b2]">
        <div className="flex items-center gap-2">
          <span className="text-base">⚜️</span>
          <span className="font-serif tracking-wide text-[#d4af37] uppercase text-[11px] font-semibold">
            L'Almanach Historique
          </span>
          <span className="hidden md:inline text-[#4a5568]">|</span>
          <span className="hidden md:inline text-xs text-[#8892a0]">
            Éphéméride & Échos du temps long
          </span>
        </div>

        {/* Onglets de navigation principale & Bouton Clarté */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectTab('ephemeris')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
              activeTab === 'ephemeris'
                ? 'bg-[#1e2535] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
                : 'text-[#9ca3af] hover:text-white hover:bg-[#151922]'
            }`}
          >
            Éphéméride
          </button>
          <button
            onClick={() => onSelectTab('timeline')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'timeline'
                ? 'bg-[#1e2535] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
                : 'text-[#9ca3af] hover:text-white hover:bg-[#151922]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Temps Long</span>
          </button>
          <button
            onClick={() => onSelectTab('cabinet')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'cabinet'
                ? 'bg-[#1e2535] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
                : 'text-[#9ca3af] hover:text-white hover:bg-[#151922]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Cabinet ({bookmarkCount})</span>
          </button>

          {/* Bouton de bascule Mode Clair / Sombre */}
          <button
            onClick={onToggleTheme}
            className="ml-1 sm:ml-2 px-2.5 py-1 rounded-md text-xs font-medium border border-[#2b3548] bg-[#121622] hover:border-[#d4af37]/50 text-[#d4af37] flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            title={theme === 'dark' ? 'Basculer en luminosité claire (Mode Papier)' : 'Basculer en mode sombre'}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Clair</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Sombre</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Barre centrale : Date du jour & Contrôle de mode */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Date & Titre de la journée */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#1c2333] to-[#121622] border border-[#d4af37]/40 flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-[10px] uppercase font-bold text-[#d4af37] leading-none">
                {currentDay.dateFormatted.split(' ')[1]?.substring(0, 4)}
              </span>
              <span className="text-xl font-bold text-white font-serif leading-none mt-0.5">
                {currentDay.day}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold font-title text-white tracking-wide">
                  {currentDay.dateFormatted}
                </h1>
                {currentDay.saintOfTheDay && (
                  <span className="hidden lg:inline text-xs text-[#718096] italic">
                    ({currentDay.saintOfTheDay})
                  </span>
                )}
              </div>
              <p className="text-xs text-[#a0aec0] line-clamp-1 max-w-md">
                {currentDay.ephemerisTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Retirer du cabinet' : 'Ajouter aux signets'}
            className={`p-2 rounded-lg border transition-all md:hidden ${
              isBookmarked
                ? 'bg-[#8b1e28]/20 border-[#a82b36] text-[#f87171]'
                : 'bg-[#151922] border-[#2d3748] text-[#a0aec0]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Sélecteur de date rapide & Mode d'écoute V1/V2 */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end flex-wrap">
          {/* Sélecteur de dates repères */}
          <div className="flex items-center gap-1.5 bg-[#121622] border border-[#242c3d] rounded-lg p-1">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37] ml-1.5" />
            <select
              value={currentDay.id}
              onChange={(e) => onSelectDay(e.target.value)}
              className="bg-transparent text-xs text-[#e2e8f0] focus:outline-none pr-2 py-1 font-serif cursor-pointer"
            >
              {Object.values(availableDays).map((day) => (
                <option key={day.id} value={day.id} className="bg-[#121622] text-[#e2e8f0]">
                  {day.dateFormatted} — {day.mainEvent.title.substring(0, 32)}...
                </option>
              ))}
            </select>
          </div>

          {/* Commutateur de Mode : Express (3-5 min) vs Approfondi (10 min) */}
          <div className="flex items-center bg-[#121622] border border-[#2b3548] rounded-lg p-0.5">
            <button
              onClick={() => onToggleListeningMode('express')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                listeningMode === 'express'
                  ? 'bg-gradient-to-r from-[#d4af37]/20 to-[#aa8421]/20 text-[#f6e05e] border border-[#d4af37]/40 shadow'
                  : 'text-[#8c9ba5] hover:text-white'
              }`}
              title="Synthèse percutante en 3 à 5 minutes"
            >
              <Clock className="w-3 h-3 text-[#d4af37]" />
              <span>Express (3-5 min)</span>
            </button>
            <button
              onClick={() => onToggleListeningMode('approfondi')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                listeningMode === 'approfondi'
                  ? 'bg-gradient-to-r from-[#8b1e28]/30 to-[#6b1620]/30 text-[#fca5a5] border border-[#a82b36]/50 shadow'
                  : 'text-[#8c9ba5] hover:text-white'
              }`}
              title="Grand Récit géopolitique & analyse causale exhaustive (10 min)"
            >
              <Sparkles className="w-3 h-3 text-[#f87171]" />
              <span>Grand Récit (10 min)</span>
            </button>
          </div>

          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Retirer du cabinet' : 'Ajouter aux signets'}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium ${
              isBookmarked
                ? 'bg-[#8b1e28]/20 border-[#a82b36] text-[#fca5a5]'
                : 'bg-[#151922] border-[#2d3748] text-[#a0aec0] hover:text-white hover:border-[#4a5568]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            <span>{isBookmarked ? 'Enregistré' : 'Signet'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
