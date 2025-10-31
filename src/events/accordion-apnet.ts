/**
 * Accordion åpnet event - triggers when an accordion is opened
 */
export const ACCORDION_APNET_EVENT = 'accordion åpnet' as const;

export interface AccordionApnetProperties {
  /** Text content of the accordion */
  tekst?: string;
}

export type AccordionApnetEvent = {
  name: typeof ACCORDION_APNET_EVENT;
  properties?: AccordionApnetProperties;
};
