// src/types/ephemeris.ts

export type HistoricalEra =
  | 'antiquite'            // De la fondation de Massalia / Gaule romaine à 476
  | 'haut_moyen_age'       // 476 à 987 (Mérovingiens, Carolingiens, Verdun 843)
  | 'moyen_age_feodal'     // 987 à 1492 (Capétiens directs, Bouvines, Guerre de Cent Ans)
  | 'renaissance_moderne'  // 1492 à 1643 (Guerres d'Italie, Réforme, Guerres de religion, Henri IV)
  | 'grand_siecle_lumieres'// 1643 à 1789 (Richelieu, Louis XIV, Siècle des Lumières)
  | 'revolutions_empires'  // 1789 à 1870 (Révolution, Napoléon, Restaurations, 1848, Second Empire)
  | 'epoque_contemporaine'; // 1870 à nos jours (IIIe, IVe, Ve Républiques, Guerres mondiales)

export type HistoricalTheme =
  | 'politique_pouvoir'
  | 'guerres_diplomatie'
  | 'arts_lettres'
  | 'sciences_philosophie'
  | 'spiritualite_societe';

export type GeographicScope = 'france' | 'europe' | 'monde';

export type ListeningMode = 'express' | 'approfondi';

export interface PoliticalAnalysis {
  motive: string;       // Le motif réel, financier, territorial ou dynastique
  stakes: string;       // L'enjeu vital de souveraineté ou d'autorité
  consequence: string;  // L'enchaînement des causes à long terme
}

export interface CenturyEcho {
  year: number;
  yearDisplay: string;
  era: HistoricalEra;
  title: string;
  scope: GeographicScope;
  shortDescription: string;
}

export interface AnecdoteItem {
  type: 'citation' | 'etymologie' | 'tableau_oeuvre' | 'fait_meconnu';
  title: string;
  content: string;
  sourceOrAttribution?: string;
  contextExplanation?: string;
}

export interface QuizChoice {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
}

export interface QuizQuestion {
  question: string;
  options: [QuizChoice, QuizChoice, QuizChoice, QuizChoice];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  historicalContextTip: string;
}

export interface AudioContent {
  express: {
    durationMinutes: number;
    script: string;
  };
  approfondi: {
    durationMinutes: number;
    script: string;
  };
}

export interface MainEvent {
  year: number;
  yearDisplay: string;
  title: string;
  subtitle: string;
  era: HistoricalEra;
  theme: HistoricalTheme;
  scope: GeographicScope;
  location: string;
  keyFigures: string[];
  narrativeExpress: string;     // Récit synthétique (150-200 mots)
  narrativeDeepDive: string;    // Récit détaillé avec analyse exhaustive (400-600 mots)
  politicalAnalysis: PoliticalAnalysis;
}

export interface PerspectiveEvent {
  year: number;
  yearDisplay: string;
  title: string;
  era: HistoricalEra;
  scope: GeographicScope;
  location: string;
  summary: string; // 80-120 mots pour ouvrir l'horizon
}

export interface EphemerisDay {
  id: string;             // "MM-DD", ex: "09-08"
  month: number;          // 1-12
  day: number;            // 1-31
  dateFormatted: string;  // "8 septembre"
  ephemerisTitle: string; // "L'affirmation de la souveraineté capétienne"
  saintOfTheDay?: string; // Repère traditionnel de calendrier (ex: "Nativité de la Vierge")
  
  // 1. Le Fait Majeur (Priorité France)
  mainEvent: MainEvent;
  
  // 2. La Perspective Européenne ou Mondiale
  perspectiveEvent: PerspectiveEvent;
  
  // 3. La Traversée des Siècles (repères du temps long)
  centuryEchoes: CenturyEcho[];
  
  // 4. Le Détail / Anecdote de Culture G
  anecdote: AnecdoteItem;
  
  // 5. Le Quiz d'ancrage mémoriel
  quiz: QuizQuestion;
  
  // Audio quotidien calibré
  audio: AudioContent;
}

export interface UserStats {
  completedQuizzes: Record<string, {
    chosenOptionId: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
    timestamp: number;
  }>;
  bookmarks: string[]; // List of day IDs (e.g., ["09-08", "12-25"])
  preferredMode: ListeningMode;
  theme?: 'dark' | 'light';
}
