/**
 * Søk event - triggers when a user performs a search
 */
export const SOK_EVENT = 'søk' as const;

export interface SokProperties {
  /** Where the search was performed */
  destinasjon?: string;
  /** Search term entered by user */
  søkeord?: string;
  /** Component where search was performed */
  komponent?: string;
}

export type SokEvent = {
  name: typeof SOK_EVENT;
  properties?: SokProperties;
};
