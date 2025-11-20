/**
 * Skjema startet-hendelse - trigges når en bruker begynner på et skjema
 */
export const SKJEMA_STARTET_EVENT = 'skjema startet' as const;

export interface SkjemaStartetProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId: string;
}

export type SkjemaStartetEvent = {
  name: typeof SKJEMA_STARTET_EVENT;
  properties: SkjemaStartetProperties;
};
