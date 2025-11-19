/**
 * Table rad utvidet - trigges når en utvidbar rad ekspanderes
 */
export const TABELL_RAD_UTVIDET_EVENT = 'tabell rad utvidet' as const;

export interface TabellRadUtvidetProperties {
  /** Id eller referanse til tabellen */
  komponentId?: string;
  /** ID på raden som utvides */
  radId?: string;
  /** Radnummer (0-indeksert) */
  radIndeks?: number;
  /** Om raden ble utvidet (true) eller kollapset (false) */
  erUtvidet?: boolean;
  /** Antall nivåer nøstet (for hierarkiske tabeller) */
  niva?: number;
}

export type TabellRadUtvidetEvent = {
  name: typeof TABELL_RAD_UTVIDET_EVENT;
  properties?: TabellRadUtvidetProperties;
};
