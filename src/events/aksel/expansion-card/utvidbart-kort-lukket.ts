/**
 * Utvidbart kort lukket - trigges når kortet lukkes
 */
export const UTVIDBART_KORT_LUKKET_EVENT = 'utvidbart kort lukket' as const;

export interface UtvidbartKortLukketProperties {
  /** Identifikator for kortet */
  kortId?: string;
  /** Tittel på kortet */
  tittel: string;
}

export type UtvidbartKortLukketEvent = {
  name: typeof UTVIDBART_KORT_LUKKET_EVENT;
  properties: UtvidbartKortLukketProperties;
};
