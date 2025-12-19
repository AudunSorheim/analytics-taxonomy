import type { BaseProperties } from '../../types';
/**
 * Accordion åpnet-hendelse - trigges når en accordion åpnes
 */
export const ACCORDION_APNET_EVENT = 'accordion åpnet' as const;

export interface AccordionApnetProperties extends BaseProperties {
  /** Tittelen til accordionen */
  tittel?: string;
}

export type AccordionApnetEvent = {
  name: typeof ACCORDION_APNET_EVENT;
  properties: AccordionApnetProperties;
};
