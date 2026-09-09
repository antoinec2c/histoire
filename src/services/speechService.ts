// src/services/speechService.ts

export interface SpeechPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentTimeEstimate: number;
  totalDurationSeconds: number;
  currentParagraphIndex: number;
  totalParagraphs: number;
}

export type PlaybackCallback = (state: SpeechPlaybackState) => void;

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate: number = 1.0;
  private paragraphs: string[] = [];
  private currentParagraphIdx: number = 0;
  private isManuallyPaused: boolean = false;
  private onStateChange: PlaybackCallback | null = null;
  private estimatedDuration: number = 0;
  private progressTimer: number | null = null;
  private elapsedSeconds: number = 0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoice();
      }
    }
  }

  private initVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Priorité aux voix françaises naturelles de haute qualité
    const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
    const preferred = frenchVoices.find(v => 
      v.name.includes('Thomas') || 
      v.name.includes('Audrey') || 
      v.name.includes('Amelie') || 
      v.name.includes('Natural') || 
      v.name.includes('Google français')
    ) || frenchVoices[0];

    if (preferred) {
      this.selectedVoice = preferred;
    }
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    return this.synth.getVoices().filter(v => v.lang.startsWith('fr'));
  }

  public setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.7, Math.min(2.0, newRate));
    if (this.synth && this.synth.speaking && !this.isManuallyPaused) {
      // Reprendre au paragraphe courant avec le nouveau débit
      this.playCurrentParagraph();
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public loadScript(text: string, estimatedDurationMinutes: number, callback?: PlaybackCallback) {
    this.stop();
    this.onStateChange = callback || null;
    this.estimatedDuration = estimatedDurationMinutes * 60;
    this.elapsedSeconds = 0;

    // Découpage en paragraphes pour un rythme calme et des pauses naturelles
    this.paragraphs = text
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);
    this.currentParagraphIdx = 0;
    this.notifyState();
  }

  public play() {
    if (!this.synth) return;

    if (this.isManuallyPaused) {
      this.isManuallyPaused = false;
      this.synth.resume();
      this.startProgressTimer();
      this.notifyState();
      return;
    }

    if (this.synth.speaking) {
      this.synth.cancel();
    }

    this.playCurrentParagraph();
  }

  private playCurrentParagraph() {
    if (!this.synth || this.currentParagraphIdx >= this.paragraphs.length) {
      this.stop();
      return;
    }

    const paragraphText = this.paragraphs[this.currentParagraphIdx];
    this.currentUtterance = new SpeechSynthesisUtterance(paragraphText);
    this.currentUtterance.lang = 'fr-FR';
    this.currentUtterance.rate = this.rate;
    if (this.selectedVoice) {
      this.currentUtterance.voice = this.selectedVoice;
    }

    this.currentUtterance.onend = () => {
      if (this.isManuallyPaused) return;
      this.currentParagraphIdx++;
      if (this.currentParagraphIdx < this.paragraphs.length) {
        // Pause naturelle entre les paragraphes (500ms) pour imiter la diction d'un conférencier
        setTimeout(() => {
          if (!this.isManuallyPaused && this.synth?.speaking === false) {
            this.playCurrentParagraph();
          }
        }, 500);
      } else {
        this.stop();
      }
    };

    this.currentUtterance.onerror = (e) => {
      console.warn('Speech error or interrupted:', e);
      this.stop();
    };

    this.synth.speak(this.currentUtterance);
    this.startProgressTimer();
    this.notifyState();
  }

  public pause() {
    if (!this.synth) return;
    this.isManuallyPaused = true;
    this.synth.pause();
    this.stopProgressTimer();
    this.notifyState();
  }

  public resume() {
    this.play();
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isManuallyPaused = false;
    this.currentParagraphIdx = 0;
    this.stopProgressTimer();
    this.notifyState();
  }

  private startProgressTimer() {
    this.stopProgressTimer();
    this.progressTimer = window.setInterval(() => {
      if (!this.isManuallyPaused && this.synth?.speaking) {
        this.elapsedSeconds += 1;
        this.notifyState();
      }
    }, 1000);
  }

  private stopProgressTimer() {
    if (this.progressTimer !== null) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }

  private notifyState() {
    if (this.onStateChange) {
      const isSpeaking = !!this.synth && this.synth.speaking;
      this.onStateChange({
        isPlaying: isSpeaking && !this.isManuallyPaused,
        isPaused: this.isManuallyPaused,
        currentTimeEstimate: this.elapsedSeconds,
        totalDurationSeconds: this.estimatedDuration,
        currentParagraphIndex: this.currentParagraphIdx,
        totalParagraphs: this.paragraphs.length
      });
    }
  }
}

export const speechService = new SpeechService();
