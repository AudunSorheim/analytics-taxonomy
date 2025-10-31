/**
 * Skjema innsending feilet event - triggers when form submission fails
 */
export const SKJEMA_INNSENDING_FEILET_EVENT = 'skjema innsending feilet' as const;

export interface SkjemaInnsendingFeiletProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
}

export type SkjemaInnsendingFeiletEvent = {
  name: typeof SKJEMA_INNSENDING_FEILET_EVENT;
  properties?: SkjemaInnsendingFeiletProperties;
};
