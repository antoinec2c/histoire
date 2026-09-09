// src/components/AnecdoteCard.tsx
import React from 'react';
import { Feather, Quote } from 'lucide-react';
import type { AnecdoteItem } from '../types/ephemeris';

interface AnecdoteCardProps {
  anecdote: AnecdoteItem;
}

export const AnecdoteCard: React.FC<AnecdoteCardProps> = ({ anecdote }) => {
  return (
    <div className="bg-gradient-to-br from-[#181a24] to-[#10121b] border border-[#d4af37]/25 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Ornement d'angle */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#d4af37]/10 pointer-events-none" />

      <div className="flex items-center gap-2 text-xs text-[#d4af37] font-semibold tracking-wider uppercase mb-2.5">
        <Feather className="w-3.5 h-3.5" />
        <span>Le Mot d'Esprit & Culture Générale</span>
      </div>

      <h3 className="text-base sm:text-lg font-bold font-title text-white">
        {anecdote.title}
      </h3>

      <div className="mt-3 relative pl-3.5 border-l-2 border-[#d4af37]/60">
        <p className="font-serif italic text-base sm:text-lg text-[#f4eee1] leading-relaxed">
          {anecdote.content}
        </p>
      </div>

      {anecdote.sourceOrAttribution && (
        <div className="mt-3 text-right">
          <span className="text-xs text-[#9aa4b2] font-serif">
            — {anecdote.sourceOrAttribution}
          </span>
        </div>
      )}

      {anecdote.contextExplanation && (
        <div className="mt-3 pt-3 border-t border-[#232938] text-xs text-[#94a3b8] font-serif leading-relaxed">
          <span className="font-semibold text-[#cbd5e1]">Éclairage : </span>
          {anecdote.contextExplanation}
        </div>
      )}
    </div>
  );
};
