/**
 * Navigere event - triggers when a user clicks a link
 */
export const NAVIGERE_EVENT = 'navigere' as const;

export interface NavigereProperties {
  /** Text of the link that was clicked */
  lenketekst?: string;
  /** Destination URL */
  destinasjon?: string;
}

export type NavigereEvent = {
  name: typeof NAVIGERE_EVENT;
  properties?: NavigereProperties;
};
