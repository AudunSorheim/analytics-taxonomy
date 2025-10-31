/**
 * Skjema spørsmål besvart event - triggers when a form question is answered
 */
export const SKJEMA_SPORSMAL_BESVART_EVENT = 'skjema spørsmål besvart' as const;

export interface SkjemaSporsmalBesvartProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
  /** The question that was answered */
  spørsmål?: string;
  /** The answer provided */
  svar?: string;
}

export type SkjemaSporsmalBesvartEvent = {
  name: typeof SKJEMA_SPORSMAL_BESVART_EVENT;
  properties?: SkjemaSporsmalBesvartProperties;
};
