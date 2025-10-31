/**
 * Skjema åpnet event - triggers when a form is opened
 */
export const SKJEMA_APNET_EVENT = 'skjema åpnet' as const;

export interface SkjemaApnetProperties {
  /** Form name */
  skjemanavn?: string;
  /** Unique form identifier */
  skjemaId?: string;
}

export type SkjemaApnetEvent = {
  name: typeof SKJEMA_APNET_EVENT;
  properties?: SkjemaApnetProperties;
};
