/**
 * Besøk-hendelse - trigges ved sidebesøk
 */
export const BESOK_EVENT = 'besøk' as const;

export interface BesokProperties {
  /** Adresse (URL) til siden som ble besøkt */
  url?: string;
  /** Tittelen på siden som ble besøkt */
  sidetittel?: string;
}

export type BesokEvent = {
  name: typeof BESOK_EVENT;
  properties?: BesokProperties;
};
