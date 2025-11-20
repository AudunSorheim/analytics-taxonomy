/**
 * Skjema fullført-hendelse - trigges når et skjema sendes inn med suksess
 */
export const SKJEMA_FULLFORT_EVENT = 'skjema fullført' as const;

export interface SkjemaFullfortProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId: string;
}

export type SkjemaFullfortEvent = {
  name: typeof SKJEMA_FULLFORT_EVENT;
  properties: SkjemaFullfortProperties;
};
