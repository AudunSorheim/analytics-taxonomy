/**
 * Navigere-hendelse - trigges når en bruker klikker på en lenke
 */
export const NAVIGERE_EVENT = 'navigere' as const;

export interface NavigereProperties {
  /** Teksten på lenken som ble klikket */
  lenketekst: string;
  /** Måladressen (URL) */
  destinasjon: string;
}

export type NavigereEvent = {
  name: typeof NAVIGERE_EVENT;
  properties: NavigereProperties;
};
