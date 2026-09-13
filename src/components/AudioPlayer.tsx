import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Headphones, Zap, Radio, Sliders, Sparkles, X, Clock } from 'lucide-react';
import { speechService } from '../services/speechService';
import type { AudioContent, ListeningMode } from '../types/ephemeris';

export type NarratorVoice = 'remy' | 'remy_grave';

interface VoiceSampleInfo {
  id: NarratorVoice;
  name: string;
  badge: string;
  badgeColor: string;
  desc: string;
  file: string;
}

const VOICE_SAMPLES: VoiceSampleInfo[] = [
  {
    id: 'remy',
    name: 'Rémy (Studio)',
    badge: 'Standard Broadcast',
    badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50',
    desc: 'Voix naturelle, équilibrée, expressive et vivante. Clarté radio broadcast dynamique.',
    file: '/audio/tests/sample_remy_studio.mp3'
  },
  {
    id: 'remy_grave',
    name: 'Rémy (Grave & Texturé)',
    badge: 'Profondeur & Grain',
    badgeColor: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/50',
    desc: 'Baryton posé (-7 Hz), coffre bas-médium et grain de diction prononcé. Récit solennel et captivant.',
    file: '/audio/tests/sample_remy_grave.mp3'
  }
];

interface AudioPlayerProps {
  dayId: string;
  audioContent: AudioContent;
  listeningMode?: ListeningMode;
  dayTitle: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  dayId,
  audioContent,
  dayTitle,
}) => {
  const currentAudioScript = audioContent.express;
  
  // États de lecture
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(currentAudioScript.durationMinutes * 60);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  // Choix de voix de narrateur studio (Rémy Studio, Rémy Grave & Texturé, ou Fabrice)
  const [narratorVoice, setNarratorVoice] = useState<NarratorVoice>('remy');
  const [showVoiceTester, setShowVoiceTester] = useState<boolean>(false);
  const [auditionPlaying, setAuditionPlaying] = useState<string | null>(null);
  const auditionAudioRef = useRef<HTMLAudioElement | null>(null);
  
  // Amplificateur de puissance matérielle (Web Audio API Boost dB)
  // 1.0 = Normal (0 dB), 1.5 = +3.5 dB, 2.0 = +6 dB, 2.5 = +8 dB
  const [gainMultiplier, setGainMultiplier] = useState<number>(1.5); // Boosté par défaut à 150% pour un confort immédiat
  
  const [hasStudioFile, setHasStudioFile] = useState<boolean>(true);
  const [showMissingNotice, setShowMissingNotice] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  
  // Web Audio Context & Gain Node refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Version de cache pour forcer le rafraîchissement immédiat du fichier audio
  const AUDIO_CACHE_VERSION = '20260909v1';

  // Chemin du fichier audio masterisé avec cache buster
  const studioAudioSrc = `/audio/${dayId}-express_${narratorVoice}.mp3?v=${AUDIO_CACHE_VERSION}`;
  const fallbackSrc = `/audio/${dayId}-express_remy.mp3?v=${AUDIO_CACHE_VERSION}`;

  // Initialisation du circuit d'amplification Web Audio API
  const initWebAudio = () => {
    if (audioCtxRef.current || !audioRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const source = ctx.createMediaElementSource(audioRef.current);
      const gainNode = ctx.createGain();
      const compressor = ctx.createDynamicsCompressor();

      // Paramétrage compresseur pour éviter toute saturation lors des forts gains
      compressor.threshold.setValueAtTime(-12, ctx.currentTime);
      compressor.knee.setValueAtTime(30, ctx.currentTime);
      compressor.ratio.setValueAtTime(12, ctx.currentTime);
      compressor.attack.setValueAtTime(0.003, ctx.currentTime);
      compressor.release.setValueAtTime(0.25, ctx.currentTime);

      gainNode.gain.setValueAtTime(gainMultiplier, ctx.currentTime);

      source.connect(gainNode);
      gainNode.connect(compressor);
      compressor.connect(ctx.destination);

      audioCtxRef.current = ctx;
      gainNodeRef.current = gainNode;
      sourceNodeRef.current = source;
    } catch (e) {
      console.warn('Web Audio API non supportée ou déjà liée :', e);
    }
  };

  // Ajuster le gain dès que gainMultiplier change
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume * gainMultiplier,
        audioCtxRef.current.currentTime
      );
    }
  }, [gainMultiplier, volume, isMuted]);

  // Vérifier avec certitude la présence du fichier audio studio sur le serveur
  useEffect(() => {
    let isMounted = true;
    fetch(studioAudioSrc, { method: 'HEAD' })
      .then((res) => {
        if (!isMounted) return;
        if (res.ok) {
          setHasStudioFile(true);
        } else {
          // Tester le fallback générique
          fetch(fallbackSrc, { method: 'HEAD' })
            .then((fRes) => {
              if (isMounted) setHasStudioFile(fRes.ok);
            })
            .catch(() => {
              if (isMounted) setHasStudioFile(false);
            });
        }
      })
      .catch(() => {
        if (isMounted) setHasStudioFile(false);
      });
    return () => {
      isMounted = false;
    };
  }, [studioAudioSrc, fallbackSrc]);

  // Réinitialiser ou basculer d'audio lors du changement de jour, de narrateur ou de mode
  useEffect(() => {
    handleStop();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = studioAudioSrc;
      audioRef.current.load();
    }
  }, [dayId, narratorVoice, studioAudioSrc]);

  // Synchronisation du lecteur HTML5 Audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const stopAudition = () => {
    if (auditionAudioRef.current) {
      auditionAudioRef.current.pause();
    }
    setAuditionPlaying(null);
  };

  const handleToggleAudition = (file: string) => {
    if (auditionPlaying === file) {
      auditionAudioRef.current?.pause();
      setAuditionPlaying(null);
    } else {
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      if (auditionAudioRef.current) {
        auditionAudioRef.current.src = file;
        auditionAudioRef.current.play().then(() => {
          setAuditionPlaying(file);
        }).catch((err) => {
          console.warn('Erreur de lecture de l’échantillon :', err);
        });
      }
    }
  };

  const handlePlayPause = () => {
    stopAudition();
    initWebAudio();
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (hasStudioFile && audioRef.current) {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.playbackRate = playbackRate;
        audio.volume = isMuted ? 0 : volume;
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn('Erreur lecture studio :', err);
        });
      }
    } else {
      // Piste studio non encore implantée sur le serveur
      setShowMissingNotice(true);
      setTimeout(() => setShowMissingNotice(false), 5000);
    }
  };

  const handleStop = () => {
    stopAudition();
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    speechService.stop();
  };

  const handleRateChange = () => {
    const rates = [1.0, 1.25, 1.5, 0.9];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIndex];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
    speechService.setRate(nextRate);
  };

  const handleCycleGain = () => {
    // Cycles de puissance : 1.0 (Normal) -> 1.5 (+3.5 dB) -> 2.0 (+6 dB) -> 2.5 (+8 dB)
    const gains = [1.0, 1.5, 2.0, 2.5];
    const nextIdx = (gains.indexOf(gainMultiplier) + 1) % gains.length;
    setGainMultiplier(gains[nextIdx]);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, clickX / width));
    const targetTime = percentage * duration;

    setCurrentTime(targetTime);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume;
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const gainLabel = gainMultiplier === 1.0 
    ? 'Standard (0 dB)' 
    : gainMultiplier === 1.5 
    ? 'Boost +3 dB (150%)' 
    : gainMultiplier === 2.0 
    ? 'Fort +6 dB (200%)' 
    : 'Max +8 dB (250%)';

  return (
    <div className="bg-gradient-to-r from-[#141925] via-[#1a2130] to-[#121620] border border-[#d4af37]/40 rounded-xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* Élément audio avec crossOrigin pour le Web Audio API gain processing */}
      <audio ref={audioRef} preload="auto" crossOrigin="anonymous" />

      {/* Halo décoratif classique */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Titre, Format & Sélecteur de Voix Studio */}
        <div className="flex items-center gap-3.5 w-full md:w-auto">
          <div className="w-12 h-12 rounded-full wax-seal flex items-center justify-center flex-shrink-0 text-white shadow-lg">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#f6e05e] border border-[#d4af37]/30">
                Récit Quotidien
              </span>

              {hasStudioFile ? (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Studio Rémy Prêt
                </span>
              ) : (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-sm animate-pulse">
                  <Clock className="w-2.5 h-2.5 text-amber-400" />
                  Gravure en cours
                </span>
              )}

              {/* Sélecteur de timbre narrateur Rémy */}
              <div className="flex items-center bg-[#10141d] border border-[#2b3548] rounded px-1.5 py-0.5 text-[11px]">
                <Radio className="w-3 h-3 text-[#d4af37] mr-1.5" />
                <span className="text-[#8892a0] text-[10px] mr-1 font-semibold uppercase hidden sm:inline">Voix :</span>
                <button
                  onClick={() => setNarratorVoice('remy')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                    narratorVoice === 'remy'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                      : 'text-[#8892a0] hover:text-white'
                  }`}
                  title="Rémy Studio : voix naturelle, dynamique, claire et chaleureuse"
                >
                  Studio
                </button>
                <span className="text-[#3a4457] mx-1">|</span>
                <button
                  onClick={() => setNarratorVoice('remy_grave')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                    narratorVoice === 'remy_grave'
                      ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/50'
                      : 'text-[#8892a0] hover:text-white'
                  }`}
                  title="Rémy Grave & Texturé : baryton posé (-7 Hz), grain de coffre renforcé, noble et solennel"
                >
                  Grave & Texturé
                </button>
                <span className="text-[#3a4457] mx-1">|</span>
                <button
                  onClick={() => setShowVoiceTester(!showVoiceTester)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase transition-all flex items-center gap-1 ${
                    showVoiceTester
                      ? 'bg-[#d4af37]/30 text-[#fde047] border border-[#d4af37]/60'
                      : 'text-[#8892a0] hover:text-[#d4af37]'
                  }`}
                  title="Ouvrir le banc d'essai pour écouter et comparer les deux timbres de Rémy (10s)"
                >
                  <Sliders className="w-2.5 h-2.5" />
                  <span>Tester</span>
                </button>
              </div>

              {/* Bouton Amplificateur Matériel (Boost dB) */}
              <button
                onClick={handleCycleGain}
                className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded flex items-center gap-1 border transition-all ${
                  gainMultiplier > 1.0
                    ? 'bg-amber-500/20 border-amber-500/60 text-[#fde047] shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                    : 'bg-[#151a24] border-[#2b3548] text-[#94a3b8]'
                }`}
                title="Cliquer pour amplifier la puissance sonore matérielle (+3 dB à +8 dB)"
              >
                <Zap className="w-3 h-3 text-amber-400 fill-current" />
                <span>{gainLabel}</span>
              </button>

              <span className="text-xs text-[#9aa4b2]">
                ~ {currentAudioScript.durationMinutes} min
              </span>
            </div>

            <h2 className="text-sm sm:text-base font-semibold text-white font-title line-clamp-1 mt-1">
              {dayTitle}
            </h2>
          </div>
        </div>

        {/* Commandes audio : Volume, Vitesse, Reset & Play */}
        <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Curseur de volume */}
          <div className="flex items-center gap-1.5 bg-[#10141d] border border-[#2b3548] rounded-lg px-2.5 py-1">
            <button
              onClick={handleVolumeToggle}
              className="text-[#d4af37] hover:text-white transition"
              title={isMuted ? 'Rétablir le son' : 'Couper le son'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-14 sm:w-18 h-1 accent-[#d4af37] cursor-pointer bg-[#242c3d] rounded-lg"
              title={`Volume : ${Math.round((isMuted ? 0 : volume) * 100)}%`}
            />
            <span className="text-[10px] font-mono text-[#8892a0] min-w-[26px]">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* Vitesse de lecture */}
          <button
            onClick={handleRateChange}
            className="px-2.5 py-1 rounded bg-[#10141d] border border-[#2b3548] text-[11px] font-mono font-medium text-[#d4af37] hover:border-[#d4af37]/50 transition"
            title="Modifier la cadence (0.9x, 1x, 1.25x, 1.5x)"
          >
            {playbackRate}x
          </button>

          {/* Bouton Recommencer */}
          <button
            onClick={handleStop}
            className="p-2 rounded-full bg-[#10141d] border border-[#2b3548] text-[#a0aec0] hover:text-white hover:border-[#4a5568] transition"
            title="Revenir au début"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Bouton Principal Lecture / Pause */}
          <button
            onClick={handlePlayPause}
            className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38e22] text-[#0d1017] font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>{currentTime > 0 ? 'Reprendre' : 'Écouter'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Barre de progression interactive & Minuteurs */}
      <div className="mt-3.5 pt-2.5 border-t border-[#1e2637] flex items-center gap-3">
        <span className="text-[11px] font-mono text-[#8892a0] min-w-[34px]">
          {formatTime(currentTime)}
        </span>
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          className="flex-1 h-2 bg-[#171d2b] hover:h-2.5 rounded-full overflow-hidden relative cursor-pointer transition-all group"
          title="Cliquer pour naviguer dans l'audio"
        >
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] via-[#fce09b] to-[#d4af37] rounded-full transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-[11px] font-mono text-[#8892a0] min-w-[34px] text-right">
          {formatTime(duration)}
        </span>
      </div>

      {/* Alerte discrète si la piste studio est encore en cours de gravure */}
      {showMissingNotice && (
        <div className="mt-3 p-3 bg-amber-950/80 border border-amber-500/50 rounded-lg text-xs text-amber-200 flex items-center justify-between animate-fade-in shadow-lg">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 animate-pulse" />
            <span>
              La piste audio studio (voix de Rémy) pour cette date est en cours de gravure en arrière-plan. Elle sera disponible sous peu.
            </span>
          </div>
          <button
            onClick={() => setShowMissingNotice(false)}
            className="text-amber-400 hover:text-white text-xs font-bold px-2 py-0.5 ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Élément audio dédié aux extraits d'audition rapide */}
      <audio
        ref={auditionAudioRef}
        onEnded={() => setAuditionPlaying(null)}
        preload="none"
      />

      {/* Banc d'essai comparatif des voix */}
      {showVoiceTester && (
        <div className="mt-3.5 pt-3 border-t border-[#2b3548]/70 bg-[#0c1017]/90 rounded-lg p-3 sm:p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs font-bold font-title uppercase tracking-wider text-[#fce09b]">
                Banc d'Essai des Timbres Vocaux (Extraits de 10 secondes)
              </span>
            </div>
            <button
              onClick={() => {
                setShowVoiceTester(false);
                stopAudition();
              }}
              className="text-[#8892a0] hover:text-white transition p-1"
              title="Fermer le banc d'essai"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#9aa4b2] mb-3 leading-relaxed">
            Comparez les deux réglages acoustiques de la voix de Rémy (débit ralenti, assise de coffre et normalisation broadcast -11 LUFS) :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {VOICE_SAMPLES.map((sample) => {
              const isCurrent = sample.id && narratorVoice === sample.id;
              const isAuditioning = auditionPlaying === sample.file;

              return (
                <div
                  key={sample.name}
                  className={`p-2.5 rounded-lg border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#151c28] border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                      : 'bg-[#10141d] border-[#242c3d] hover:border-[#3a4457]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white font-serif">{sample.name}</span>
                        {isCurrent && (
                          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-semibold">
                            Actif
                          </span>
                        )}
                      </div>
                      <span className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border ${sample.badgeColor}`}>
                        {sample.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#8892a0] leading-snug mb-2.5">
                      {sample.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1.5 border-t border-[#1e2637]">
                    <button
                      onClick={() => handleToggleAudition(sample.file)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAuditioning
                          ? 'bg-[#d4af37] text-slate-950 shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                          : 'bg-[#1e2637] text-[#cbd5e1] hover:bg-[#2b3548] hover:text-white'
                      }`}
                      title={isAuditioning ? 'Mettre l’extrait en pause' : 'Écouter l’extrait de 10s'}
                    >
                      {isAuditioning ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                          <span>Écouter (10s)</span>
                        </>
                      )}
                    </button>

                    {sample.id && !isCurrent && (
                      <button
                        onClick={() => {
                          setNarratorVoice(sample.id as NarratorVoice);
                          stopAudition();
                        }}
                        className="px-2 py-1 rounded text-[10px] font-semibold text-[#a0aec0] hover:text-[#d4af37] hover:bg-[#1a2130] transition border border-transparent hover:border-[#d4af37]/30 cursor-pointer"
                      >
                        Sélectionner
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
