/**
 * Guidepanel vist event - triggers when a guide panel is displayed
 */
export const GUIDEPANEL_VIST_EVENT = 'guidepanel vist' as const;

export interface GuidepanelVistProperties {
  /** Text content of the guide panel */
  tekst?: string;
  /** Component name */
  komponent?: string;
}

export type GuidepanelVistEvent = {
  name: typeof GUIDEPANEL_VIST_EVENT;
  properties?: GuidepanelVistProperties;
};
