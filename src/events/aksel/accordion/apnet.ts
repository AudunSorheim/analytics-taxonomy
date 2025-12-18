/**
 * Accordion åpnet-hendelse - trigges når en accordion åpnes
 */
export const ACCORDION_APNET_EVENT = 'accordion åpnet' as const;

export interface AccordionApnetProperties {
  /** Unik id for komponenten */
  komponentId?: string;
  /** Tittelen til accordionen */
  tittel?: string;
}

export type AccordionApnetEvent = {
  name: typeof ACCORDION_APNET_EVENT;
  properties: AccordionApnetProperties;
};
