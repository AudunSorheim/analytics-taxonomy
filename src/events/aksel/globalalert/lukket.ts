/**
 * GlobalAlert lukket-hendelse - trigges når et globalt varsel lukkes
 */
export const GLOBALALERT_LUKKET_EVENT = 'globalalert lukket' as const;

export interface GlobalAlertLukketProperties {
  /** Status/variant av varselet */
  status?: 'announcement' | 'success' | 'warning' | 'error';
  /** Tittel på varselet */
  tittel?: string;
  /** Tekstinnholdet i varselet */
  tekst?: string;
}

export type GlobalAlertLukketEvent = {
  name: typeof GLOBALALERT_LUKKET_EVENT;
  properties: GlobalAlertLukketProperties;
};
