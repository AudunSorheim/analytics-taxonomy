/**
 * HelpText vist - trigges når hjelpeteksten åpnes
 */
export const HELPTEXT_VIST_EVENT = 'helptext vist' as const;

export interface HelpTextVistProperties {
  /** Id til helptext-komponenten */
  komponentId?: string;
  /** Tekstinnholdet i hjelpeteksten */
  tekst?: string;
  /** Plassering av popover */
  placement?: 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
}

export type HelpTextVistEvent = {
  name: typeof HELPTEXT_VIST_EVENT;
  properties?: HelpTextVistProperties;
};
