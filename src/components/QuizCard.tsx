// src/components/QuizCard.tsx
import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Lightbulb, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { QuizQuestion } from '../types/ephemeris';
import { storageService } from '../services/storageService';

interface QuizCardProps {
  quiz: QuizQuestion;
  dayId: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, dayId }) => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Charger l'état sauvegardé si déjà répondu
  useEffect(() => {
    const stats = storageService.getStats();
    const saved = stats.completedQuizzes[dayId];
    if (saved) {
      setSelectedOption(saved.chosenOptionId);
      setIsSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  }, [dayId]);

  const handleSelect = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;

    setSelectedOption(optionId);
    setIsSubmitted(true);
    const isCorrect = optionId === quiz.correctOptionId;

    storageService.recordQuiz(dayId, optionId, isCorrect);

    if (isCorrect) {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#d4af37', '#f6e05e', '#ffffff', '#e53e3e']
      });
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === quiz.correctOptionId;

  return (
    <section className="bg-[#11151f] border border-[#273042] rounded-2xl p-5 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between pb-3.5 border-b border-[#1f2635]">
        <div className="flex items-center gap-2 text-[#d4af37]">
          <HelpCircle className="w-4 h-4" />
          <h3 className="font-title font-bold text-base text-white tracking-wide">
            Le Quiz d'Ancrage Mémoriel
          </h3>
        </div>
        {isSubmitted && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-[#9aa4b2] hover:text-[#d4af37] transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Recommencer</span>
          </button>
        )}
      </div>

      <div className="mt-4">
        <p className="text-sm sm:text-base font-serif font-medium text-[#f1f5f9] leading-relaxed">
          {quiz.question}
        </p>

        {/* Grille des 4 options */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {quiz.options.map((option) => {
            const isOptionSelected = selectedOption === option.id;
            const isCorrectOption = option.id === quiz.correctOptionId;

            let buttonStyle = 'bg-[#161c28] border-[#252f44] text-[#cbd5e1] hover:bg-[#1c2434] hover:border-[#d4af37]/40';

            if (isSubmitted) {
              if (isCorrectOption) {
                buttonStyle = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 shadow-sm';
              } else if (isOptionSelected && !isCorrectOption) {
                buttonStyle = 'bg-rose-950/60 border-rose-500/80 text-rose-200';
              } else {
                buttonStyle = 'bg-[#121620] border-[#1d2433] text-[#64748b] opacity-60';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={isSubmitted}
                className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${buttonStyle} cursor-pointer disabled:cursor-default`}
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5">
                  {option.id}
                </span>
                <span className="text-xs sm:text-sm font-serif leading-snug flex-1">
                  {option.label}
                </span>
                {isSubmitted && isCorrectOption && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                )}
                {isSubmitted && isOptionSelected && !isCorrectOption && (
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Débriefing & Explication */}
        {isSubmitted && (
          <div className="mt-5 p-4 rounded-xl bg-[#141a27] border border-[#263146] text-xs sm:text-sm space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 font-bold font-serif">
              {isCorrect ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Excellente déduction historique !
                </span>
              ) : (
                <span className="text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  La bonne réponse était la proposition {quiz.correctOptionId}.
                </span>
              )}
            </div>
            <p className="text-[#cbd5e1] font-serif leading-relaxed">
              {quiz.explanation}
            </p>
            {quiz.historicalContextTip && (
              <div className="pt-2 border-t border-[#20293a] flex items-start gap-2 text-xs text-[#94a3b8] italic">
                <Lightbulb className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>{quiz.historicalContextTip}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
