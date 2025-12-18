/**
 * Skjema steg fullført-hendelse - trigges når et steg i skjemaet fullføres
 */
export const SKJEMA_STEG_FULLFORT_EVENT = 'skjema steg fullført' as const;

export interface SkjemaStegFullfortProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId: string;
  /** Nummer eller id for steget */
  steg?: string;
}

export type SkjemaStegFullfortEvent = {
  name: typeof SKJEMA_STEG_FULLFORT_EVENT;
  properties: SkjemaStegFullfortProperties;
};
