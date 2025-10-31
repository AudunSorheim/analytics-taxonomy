/**
 * Skjema steg fullført event - triggers when a form step is completed
 */
export const SKJEMA_STEG_FULLFORT_EVENT = 'skjema steg fullført' as const;

export interface SkjemaStegFullfortProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
  /** Step number or identifier */
  steg?: string;
}

export type SkjemaStegFullfortEvent = {
  name: typeof SKJEMA_STEG_FULLFORT_EVENT;
  properties?: SkjemaStegFullfortProperties;
};
