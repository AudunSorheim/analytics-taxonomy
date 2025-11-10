/**
 * Søk-hendelse - trigges når en bruker gjennomfører et søk
 */
export const SOK_EVENT = 'søk' as const;

export interface SokProperties {
  /** Hvor søket ble utført */
  destinasjon?: string;
  /** Søkeordet brukeren skrev inn */
  søkeord?: string;
  /** Komponenten der søket ble utført */
  komponent?: string;
}

export type SokEvent = {
  name: typeof SOK_EVENT;
  properties?: SokProperties;
};
