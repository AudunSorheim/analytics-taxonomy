/**
 * Besøk event - triggers on page visit
 */
export const BESOK_EVENT = 'besøk' as const;

export interface BesokProperties {
  // No specific properties for this event
}

export type BesokEvent = {
  name: typeof BESOK_EVENT;
  properties?: BesokProperties;
};
