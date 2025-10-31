/**
 * Skjema startet event - triggers when a form is started
 */
export const SKJEMA_STARTET_EVENT = 'skjema startet' as const;

export interface SkjemaStartetProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
}

export type SkjemaStartetEvent = {
  name: typeof SKJEMA_STARTET_EVENT;
  properties?: SkjemaStartetProperties;
};
