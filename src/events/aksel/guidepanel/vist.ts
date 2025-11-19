/**
 * Guidepanel vist-hendelse - trigges når et guidepanel vises
 */
export const GUIDEPANEL_VIST_EVENT = 'guidepanel vist' as const;

export interface GuidepanelVistProperties {
  /** Tekstinnholdet i guidepanelet */
  tekst?: string;
  /** Navn på komponenten */
  komponent?: string;
}

export type GuidepanelVistEvent = {
  name: typeof GUIDEPANEL_VIST_EVENT;
  properties?: GuidepanelVistProperties;
};
