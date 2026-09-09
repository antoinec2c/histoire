// src/components/CabinetView.tsx
import React from 'react';
import { Bookmark, Award, CheckCircle, XCircle, ArrowRight, BookOpen, Trash2 } from 'lucide-react';
import type { EphemerisDay, UserStats } from '../types/ephemeris';
import { storageService } from '../services/storageService';

interface CabinetViewProps {
  days: Record<string, EphemerisDay>;
  stats: UserStats;
  onSelectDay: (dayId: string) => void;
  onRefreshStats: () => void;
}

export const CabinetView: React.FC<CabinetViewProps> = ({
  days,
  stats,
  onSelectDay,
  onRefreshStats,
}) => {
  const bookmarkedDays = stats.bookmarks
    .map((id) => days[id])
    .filter((d): d is EphemerisDay => !!d);

  const completedQuizEntries = Object.entries(stats.completedQuizzes);
  const totalCompleted = completedQuizEntries.length;
  const correctCount = completedQuizEntries.filter(([, q]) => q.isCorrect).length;
  const successRate = totalCompleted > 0 ? Math.round((correctCount / totalCompleted) * 100) : 0;

  const handleClearHistory = () => {
    if (window.confirm('Voulez-vous réinitialiser votre historique de quiz et vos signets ?')) {
      storageService.saveStats({
        completedQuizzes: {},
        bookmarks: [],
        preferredMode: stats.preferredMode,
      });
      onRefreshStats();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* En-tête du Cabinet */}
      <div className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#d4af37]">
            <BookOpen className="w-5 h-5" />
            <h2 className="font-title font-bold text-lg sm:text-xl text-white tracking-wide">
              La Compagnie des Ombres — Recueil & Méditations
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#9aa4b2] font-serif">
            Le dialogue avec les siècles : vos fiches conservées et le journal de votre mémorisation active.
          </p>
        </div>

        <button
          onClick={handleClearHistory}
          className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-rose-400 transition"
          title="Réinitialiser les données locales"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Réinitialiser</span>
        </button>
      </div>

      {/* Cartes de KPI mémoriels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="bg-[#11151f] border border-[#242c3d] rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#f6e05e]">
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-serif text-white">{bookmarkedDays.length}</div>
            <div className="text-xs text-[#9aa4b2]">Fiches en signet</div>
          </div>
        </div>

        <div className="bg-[#11151f] border border-[#242c3d] rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-300">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-serif text-white">{totalCompleted}</div>
            <div className="text-xs text-[#9aa4b2]">Quiz tentés</div>
          </div>
        </div>

        <div className="bg-[#11151f] border border-[#242c3d] rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-300">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-serif text-white">{successRate}%</div>
            <div className="text-xs text-[#9aa4b2]">Taux d'assimilation</div>
          </div>
        </div>
      </div>

      {/* Section Signets */}
      <div className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl">
        <h3 className="text-base font-bold font-title text-white flex items-center gap-2 pb-3 border-b border-[#1f2635]">
          <Bookmark className="w-4 h-4 text-[#d4af37]" />
          <span>Fiches Enregistrées ({bookmarkedDays.length})</span>
        </h3>

        {bookmarkedDays.length === 0 ? (
          <p className="mt-4 text-xs sm:text-sm text-[#8892a0] font-serif italic text-center py-6">
            Aucune fiche dans votre cabinet. Cliquez sur « Signet » lors de la lecture d’un jour pour la conserver.
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {bookmarkedDays.map((day) => (
              <div
                key={day.id}
                onClick={() => onSelectDay(day.id)}
                className="p-4 rounded-xl bg-[#161c28] border border-[#242c3d] hover:border-[#d4af37]/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-serif font-bold text-[#d4af37]">{day.dateFormatted}</span>
                    <span className="text-[#64748b]">·</span>
                    <span className="text-[#94a3b8]">An {day.mainEvent.yearDisplay}</span>
                  </div>
                  <h4 className="mt-1 font-semibold text-sm text-white group-hover:text-[#fce09b] transition-colors line-clamp-1">
                    {day.mainEvent.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#9aa4b2] font-serif line-clamp-2">
                    {day.mainEvent.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8892a0] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section Révision des Quiz */}
      <div className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl">
        <h3 className="text-base font-bold font-title text-white flex items-center gap-2 pb-3 border-b border-[#1f2635]">
          <Award className="w-4 h-4 text-[#d4af37]" />
          <span>Journal de Mémorisation Active</span>
        </h3>

        {totalCompleted === 0 ? (
          <p className="mt-4 text-xs sm:text-sm text-[#8892a0] font-serif italic text-center py-6">
            Vous n'avez pas encore validé de quiz quotidien.
          </p>
        ) : (
          <div className="mt-4 space-y-2.5">
            {completedQuizEntries.map(([dayId, record]) => {
              const day = days[dayId];
              if (!day) return null;
              return (
                <div
                  key={dayId}
                  onClick={() => onSelectDay(dayId)}
                  className="p-3.5 rounded-xl bg-[#161c28] border border-[#242c3d] hover:border-[#d4af37]/40 flex items-center justify-between gap-3 cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    {record.isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    )}
                    <div>
                      <div className="text-xs font-serif text-[#9aa4b2]">
                        {day.dateFormatted} — Quiz réussi avec l'option {record.chosenOptionId}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#fce09b] transition-colors line-clamp-1">
                        {day.quiz.question}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                    <span>Revoir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
