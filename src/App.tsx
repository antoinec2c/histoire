// src/App.tsx
import { useState, useEffect, useTransition } from 'react';
import { EPHEMERIS_DATABASE } from './data/ephemerisData';
import type { ListeningMode, UserStats } from './types/ephemeris';
import { storageService } from './services/storageService';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer';
import { MainEventCard } from './components/MainEventCard';
import { PerspectiveCard } from './components/PerspectiveCard';
import { CenturyEchoes } from './components/CenturyEchoes';
import { AnecdoteCard } from './components/AnecdoteCard';
import { QuizCard } from './components/QuizCard';
import { TimelineView } from './components/TimelineView';
import { CabinetView } from './components/CabinetView';

export function App() {
  const [currentDayId, setCurrentDayId] = useState<string>('09-08');
  const [activeTab, setActiveTab] = useState<'ephemeris' | 'timeline' | 'cabinet'>('ephemeris');
  const [listeningMode, setListeningMode] = useState<ListeningMode>('express');
  const [userStats, setUserStats] = useState<UserStats>(storageService.getStats());
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [, startTransition] = useTransition();

  // Initialisation avec la date courante si disponible ou '09-08'
  useEffect(() => {
    const stats = storageService.getStats();
    setUserStats(stats);
    setListeningMode(stats.preferredMode || 'express');
    const initialTheme = stats.theme || 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light', initialTheme === 'light');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Détecter si la date réelle correspond à une de nos fiches
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayId = `${month}-${day}`;
    if (EPHEMERIS_DATABASE[todayId]) {
      setCurrentDayId(todayId);
    }
  }, []);

  const currentDay = EPHEMERIS_DATABASE[currentDayId] || EPHEMERIS_DATABASE['09-08'];

  const handleSelectDay = (dayId: string) => {
    startTransition(() => {
      setCurrentDayId(dayId);
      setActiveTab('ephemeris');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleToggleMode = (mode: ListeningMode) => {
    setListeningMode(mode);
    storageService.setPreferredMode(mode);
    setUserStats(storageService.getStats());
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    storageService.setTheme(nextTheme);
    setUserStats(storageService.getStats());
  };

  const handleToggleBookmark = () => {
    storageService.toggleBookmark(currentDay.id);
    setUserStats(storageService.getStats());
  };

  const isCurrentBookmarked = userStats.bookmarks.includes(currentDay.id);

  return (
    <div className="min-h-screen bg-cabinet flex flex-col selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      {/* Navigation et contrôles supérieurs */}
      <Header
        currentDay={currentDay}
        availableDays={EPHEMERIS_DATABASE}
        onSelectDay={handleSelectDay}
        listeningMode={listeningMode}
        onToggleListeningMode={handleToggleMode}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isBookmarked={isCurrentBookmarked}
        onToggleBookmark={handleToggleBookmark}
        bookmarkCount={userStats.bookmarks.length}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Corps Principal */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {activeTab === 'ephemeris' && (
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Lecteur Audio Haute Qualité (Express ou Grand Récit) */}
            <AudioPlayer
              dayId={currentDay.id}
              audioContent={currentDay.audio}
              listeningMode={listeningMode}
              dayTitle={`${currentDay.mainEvent.yearDisplay} — ${currentDay.mainEvent.title}`}
            />

            {/* Fait Majeur & Analyse des Causes Politiques */}
            <MainEventCard
              event={currentDay.mainEvent}
              listeningMode={listeningMode}
            />

            {/* Perspective Européenne ou Mondiale */}
            <PerspectiveCard
              event={currentDay.perspectiveEvent}
            />

            {/* Ce jour-là à travers les siècles */}
            <CenturyEchoes
              echoes={currentDay.centuryEchoes}
              currentDateFormatted={currentDay.dateFormatted}
            />

            {/* Grille Culture G & Quiz */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <AnecdoteCard anecdote={currentDay.anecdote} />
              <QuizCard quiz={currentDay.quiz} dayId={currentDay.id} />
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <TimelineView
            days={EPHEMERIS_DATABASE}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeTab === 'cabinet' && (
          <CabinetView
            days={EPHEMERIS_DATABASE}
            stats={userStats}
            onSelectDay={handleSelectDay}
            onRefreshStats={() => setUserStats(storageService.getStats())}
          />
        )}
      </main>

      {/* Pied de page éditorial */}
      <footer className="mt-16 border-t border-[#1e2537] bg-[#090c12] py-8 px-4 text-center text-xs text-[#718096]">
        <div className="max-w-2xl mx-auto space-y-2.5">
          <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 text-[#d4af37] mx-auto flex items-center justify-center font-serif font-bold text-sm">
            ⚜️
          </div>
          <p className="font-serif text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
            L'Almanach Historique — Éphéméride du temps long, de l'Antiquité à l'époque contemporaine
          </p>
          <div className="text-[11px] text-[#718096] uppercase tracking-widest font-semibold">
            Conçu pour l'autonomie 100 % hors-ligne
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
