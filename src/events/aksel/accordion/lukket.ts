/**
 * Accordion lukket-hendelse - trigges når en accordion lukkes
 */
export const ACCORDION_LUKKET_EVENT = 'accordion lukket' as const;

export interface AccordionLukketProperties {
  /** Unik id for komponenten */
  komponentId?: string;
  /** Tittelen til accordionen */
  tittel?: string;
}

export type AccordionLukketEvent = {
  name: typeof ACCORDION_LUKKET_EVENT;
  properties: AccordionLukketProperties;
};
