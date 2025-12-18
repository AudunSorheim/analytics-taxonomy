/**
 * Tooltip lukket - trigges når tooltipen skjules (bruker flytter mus/fokus bort)
 */
export const TOOLTIP_LUKKET_EVENT = 'tooltip lukket' as const;

export interface TooltipLukketProperties {
  /** Id på elementet som hadde tooltipen */
  komponentId?: string;
}

export type TooltipLukketEvent = {
  name: typeof TOOLTIP_LUKKET_EVENT;
  properties: TooltipLukketProperties;
};
