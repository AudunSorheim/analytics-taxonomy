/**
 * Filtervalg event - user selects a filter option
 */
export const FILTERVALG_EVENT = 'filtervalg' as const;

export interface FiltervalgProperties {
  /** Category of filter */
  kategori?: string;
  /** Name of the filter selected */
  filternavn?: string;
}

export type FiltervalgEvent = {
  name: typeof FILTERVALG_EVENT;
  properties?: FiltervalgProperties;
};
