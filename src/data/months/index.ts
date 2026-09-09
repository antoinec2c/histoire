// src/data/months/index.ts
import type { EphemerisDay } from '../../types/ephemeris';
import { MARS_DAYS } from './03_mars';
import { JUIN_DAYS } from './06_juin';
import { JUILLET_DAYS } from './07_juillet';
import { SEPTEMBRE_DAYS } from './09_septembre';
import { DECEMBRE_DAYS } from './12_decembre';

export const EPHEMERIS_DATABASE: Record<string, EphemerisDay> = {
  ...MARS_DAYS,
  ...JUIN_DAYS,
  ...JUILLET_DAYS,
  ...SEPTEMBRE_DAYS,
  ...DECEMBRE_DAYS,
};

export const AVAILABLE_DAY_IDS = Object.keys(EPHEMERIS_DATABASE);
