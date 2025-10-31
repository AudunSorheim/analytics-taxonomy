/**
 * Alert vist event - triggers when an alert is displayed
 */
export const ALERT_VIST_EVENT = 'alert vist' as const;

export interface AlertVistProperties {
  /** Type/variant of alert (e.g., success, warning, error) */
  variant?: string;
  /** Text content of the alert */
  tekst?: string;
}

export type AlertVistEvent = {
  name: typeof ALERT_VIST_EVENT;
  properties?: AlertVistProperties;
};
