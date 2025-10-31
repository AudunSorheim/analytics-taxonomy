/**
 * Skjema validering feilet event - triggers when form validation fails
 */
export const SKJEMA_VALIDERING_FEILET_EVENT = 'skjema validering feilet' as const;

export interface SkjemaValideringFeiletProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
}

export type SkjemaValideringFeiletEvent = {
  name: typeof SKJEMA_VALIDERING_FEILET_EVENT;
  properties?: SkjemaValideringFeiletProperties;
};
