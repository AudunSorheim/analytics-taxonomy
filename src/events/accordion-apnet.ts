/**
 * Accordion åpnet-hendelse - trigges når en accordion åpnes
 */
export const ACCORDION_APNET_EVENT = 'accordion åpnet' as const;

export interface AccordionApnetProperties {
  /** Tekstinnholdet i accordionen */
  tekst?: string;
}

export type AccordionApnetEvent = {
  name: typeof ACCORDION_APNET_EVENT;
  properties?: AccordionApnetProperties;
};
