import type { BaseProperties } from '../../types';
/**
 * Tabell rad valgt - trigges når en rad markeres eller aktiveres
 */
export const TABELL_RAD_VALGT_EVENT = 'tabell rad valgt' as const;

export interface TabellRadValgtProperties extends BaseProperties {
  /** Indeks (0-basert) for raden */
  radIndeks?: number;
  /** Om raden ble valgt eller fjernet */
  erValgt?: boolean;
}

export type TabellRadValgtEvent = {
  name: typeof TABELL_RAD_VALGT_EVENT;
  properties: TabellRadValgtProperties;
};
