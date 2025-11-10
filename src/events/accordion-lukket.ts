/**
 * Accordion lukket-hendelse - trigges når en accordion lukkes
 */
export const ACCORDION_LUKKET_EVENT = 'accordion lukket' as const;

export interface AccordionLukketProperties {
  /** Tekstinnholdet i accordionen */
  tekst?: string;
}

export type AccordionLukketEvent = {
  name: typeof ACCORDION_LUKKET_EVENT;
  properties?: AccordionLukketProperties;
};
