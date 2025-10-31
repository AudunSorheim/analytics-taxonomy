/**
 * Accordion lukket event - triggers when an accordion is closed
 */
export const ACCORDION_LUKKET_EVENT = 'accordion lukket' as const;

export interface AccordionLukketProperties {
  /** Text content of the accordion */
  tekst?: string;
}

export type AccordionLukketEvent = {
  name: typeof ACCORDION_LUKKET_EVENT;
  properties?: AccordionLukketProperties;
};
