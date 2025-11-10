/**
 * Alert vist-hendelse - trigges når et varsel vises
 */
export const ALERT_VIST_EVENT = 'alert vist' as const;

export interface AlertVistProperties {
  /** Variant av varselet (for eksempel success, warning, error) */
  variant?: string;
  /** Tekstinnholdet i varselet */
  tekst?: string;
}

export type AlertVistEvent = {
  name: typeof ALERT_VIST_EVENT;
  properties?: AlertVistProperties;
};
