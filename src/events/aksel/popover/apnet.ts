/**
 * Popover åpnet - trigges når popoveren vises
 */
export const POPOVER_APNET_EVENT = 'popover åpnet' as const;

export interface PopoverApnetProperties {
  /** Id til popover-komponenten */
  komponentId: string;
  /** Elementet som åpnet popoveren */
  triggerId?: string;
  /** Variant eller plassering for popoveren */
  variant: string;
}

export type PopoverApnetEvent = {
  name: typeof POPOVER_APNET_EVENT;
  properties: PopoverApnetProperties;
};
