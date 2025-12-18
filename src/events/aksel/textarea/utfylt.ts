/**
 * Textarea utfylt - trigges når tekstområdet får eller mister verdi
 */
export const TEXTAREA_UTFYLT_EVENT = 'textarea utfylt' as const;

export interface TextareaUtfyltProperties {
  /** Id til tekstområdet */
  feltId?: string;
  /** Navnet eller labelen til feltet */
  feltNavn?: string;
  /** Om feltet inneholder tekst etter endringen */
  harVerdi?: boolean;
  /** Antall tegn i feltet */
  tegnlengde?: number;
}

export type TextareaUtfyltEvent = {
  name: typeof TEXTAREA_UTFYLT_EVENT;
  properties: TextareaUtfyltProperties;
};
