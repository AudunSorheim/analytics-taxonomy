/**
 * Skjema fullført event - triggers when a form is completed
 */
export const SKJEMA_FULLFORT_EVENT = 'skjema fullført' as const;

export interface SkjemaFullfortProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
}

export type SkjemaFullfortEvent = {
  name: typeof SKJEMA_FULLFORT_EVENT;
  properties?: SkjemaFullfortProperties;
};
