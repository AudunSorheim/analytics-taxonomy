/**
 * Skjema spørsmål besvart-hendelse - trigges når et spørsmål i skjemaet besvares
 */
export const SKJEMA_SPORSMAL_BESVART_EVENT = 'skjema spørsmål besvart' as const;

export interface SkjemaSporsmalBesvartProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId: string;
  /** Spørsmålet som ble besvart */
  spørsmål?: string;
  /** Svaret som ble gitt */
  svar?: string;
}

export type SkjemaSporsmalBesvartEvent = {
  name: typeof SKJEMA_SPORSMAL_BESVART_EVENT;
  properties: SkjemaSporsmalBesvartProperties;
};
