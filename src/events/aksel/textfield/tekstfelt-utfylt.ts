/**
 * Tekstfelt utfylt - trigges når feltet får/ mister verdi
 */
export const TEKSTFELT_UTFYLT_EVENT = 'tekstfelt utfylt' as const;

export interface TekstfeltUtfyltProperties {
  /** Identifikator for feltet */
  feltId: string;
  /** Navn eller label for feltet */
  feltNavn?: string;
  /** Om feltet har verdi */
  harVerdi?: boolean;
}

export type TekstfeltUtfyltEvent = {
  name: typeof TEKSTFELT_UTFYLT_EVENT;
  properties: TekstfeltUtfyltProperties;
};
