/**
 * Skjema validering feilet-hendelse - trigges når skjemaet feiler i validering
 */
export const SKJEMA_VALIDERING_FEILET_EVENT = 'skjema validering feilet' as const;

export interface SkjemaValideringFeiletProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId: string;
}

export type SkjemaValideringFeiletEvent = {
  name: typeof SKJEMA_VALIDERING_FEILET_EVENT;
  properties: SkjemaValideringFeiletProperties;
};
