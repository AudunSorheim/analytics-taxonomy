import type { BaseProperties } from '../../types';
/**
 * Popover lukket - trigges når popoveren skjules
 */
export const POPOVER_LUKKET_EVENT = 'popover lukket' as const;

export interface PopoverLukketProperties extends BaseProperties {
  /** Id til popover-komponenten */
  /** Hvordan popoveren ble lukket */
  lukkMetode?: string;
}

export type PopoverLukketEvent = {
  name: typeof POPOVER_LUKKET_EVENT;
  properties: PopoverLukketProperties;
};
