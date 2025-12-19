import type { BaseProperties } from '../types';
/**
 * Filtervalg-hendelse - trigges når en bruker velger et filter
 */
export const FILTERVALG_EVENT = 'filtervalg' as const;

export interface FiltervalgProperties extends BaseProperties {
  /** Kategori på filteret */
  kategori?: string;
  /** Navnet på filteret som ble valgt */
  filternavn?: string;
}

export type FiltervalgEvent = {
  name: typeof FILTERVALG_EVENT;
  properties: FiltervalgProperties;
};
