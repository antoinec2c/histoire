// src/services/storageService.ts
import type { UserStats, ListeningMode } from '../types/ephemeris';

const STORAGE_KEY = 'almanach_histoire_user_stats';

const DEFAULT_STATS: UserStats = {
  completedQuizzes: {},
  bookmarks: ['09-08'], // Le 8 septembre en signet par défaut
  preferredMode: 'express',
  theme: 'dark'
};

export const storageService = {
  getStats(): UserStats {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return DEFAULT_STATS;
      return { ...DEFAULT_STATS, ...JSON.parse(data) };
    } catch {
      return DEFAULT_STATS;
    }
  },

  saveStats(stats: UserStats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Erreur de sauvegarde locale :', e);
    }
  },

  toggleBookmark(dayId: string): boolean {
    const stats = this.getStats();
    const index = stats.bookmarks.indexOf(dayId);
    let isBookmarked = false;
    if (index >= 0) {
      stats.bookmarks.splice(index, 1);
      isBookmarked = false;
    } else {
      stats.bookmarks.push(dayId);
      isBookmarked = true;
    }
    this.saveStats(stats);
    return isBookmarked;
  },

  isBookmarked(dayId: string): boolean {
    const stats = this.getStats();
    return stats.bookmarks.includes(dayId);
  },

  recordQuiz(dayId: string, chosenOptionId: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) {
    const stats = this.getStats();
    stats.completedQuizzes[dayId] = {
      chosenOptionId,
      isCorrect,
      timestamp: Date.now()
    };
    this.saveStats(stats);
  },

  setPreferredMode(mode: ListeningMode) {
    const stats = this.getStats();
    stats.preferredMode = mode;
    this.saveStats(stats);
  },

  setTheme(theme: 'dark' | 'light') {
    const stats = this.getStats();
    stats.theme = theme;
    this.saveStats(stats);
  }
};
