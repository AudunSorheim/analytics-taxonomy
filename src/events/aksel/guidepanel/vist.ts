import type { BaseProperties } from '../../types';
/**
 * Guidepanel vist-hendelse - trigges når et guidepanel vises
 */
export const GUIDEPANEL_VIST_EVENT = 'guidepanel vist' as const;

export interface GuidepanelVistProperties extends BaseProperties {
  /** Tekstinnholdet i guidepanelet */
  tekst: string;
  /** Id til komponenten */
}

export type GuidepanelVistEvent = {
  name: typeof GUIDEPANEL_VIST_EVENT;
  properties: GuidepanelVistProperties;
};
