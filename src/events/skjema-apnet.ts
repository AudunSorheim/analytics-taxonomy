/**
 * Skjema åpnet-hendelse - trigges når et skjema åpnes
 */
export const SKJEMA_APNET_EVENT = 'skjema åpnet' as const;

export interface SkjemaApnetProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Unik identifikator for skjemaet */
  skjemaId?: string;
}

export type SkjemaApnetEvent = {
  name: typeof SKJEMA_APNET_EVENT;
  properties?: SkjemaApnetProperties;
};
