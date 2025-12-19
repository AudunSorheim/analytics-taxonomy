import type { BaseProperties } from '../types';
/**
 * Navigere-hendelse - trigges når en bruker klikker på en lenke
 */
export const NAVIGERE_EVENT = 'navigere' as const;

export interface NavigereProperties extends BaseProperties {
  /** Teksten på lenken som ble klikket */
  lenketekst: string;
  /** Måladressen (URL) */
  destinasjon: string;
}

export type NavigereEvent = {
  name: typeof NAVIGERE_EVENT;
  properties: NavigereProperties;
};
