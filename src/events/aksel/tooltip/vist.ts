/**
 * Tooltip vist - trigges når brukeren hovrer over eller fokuserer på et element med tooltip
 */
export const TOOLTIP_VIST_EVENT = 'tooltip vist' as const;

export interface TooltipVistProperties {
  /** Id på elementet som har tooltipen */
  komponentId?: string;
  /** Tekstinnholdet i tooltipen */
  tekst?: string;
}

export type TooltipVistEvent = {
  name: typeof TOOLTIP_VIST_EVENT;
  properties?: TooltipVistProperties;
};
