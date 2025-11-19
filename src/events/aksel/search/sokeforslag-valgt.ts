/**
 * Søkeforslag valgt - trigges når bruker velger et forslag
 */
export const SOKEFORSLAG_VALGT_EVENT = 'søkeforslag valgt' as const;

export interface SokeforslagValgtProperties {
  /** Teksten eller identifikatoren til forslaget */
  valgtForslag?: string;
}

export type SokeforslagValgtEvent = {
  name: typeof SOKEFORSLAG_VALGT_EVENT;
  properties?: SokeforslagValgtProperties;
};
