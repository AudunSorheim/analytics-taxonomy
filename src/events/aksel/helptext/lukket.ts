/**
 * HelpText lukket - trigges når hjelpeteksten skjules
 */
export const HELPTEXT_LUKKET_EVENT = 'helptext lukket' as const;

export interface HelpTextLukketProperties {
  /** Id til helptext-komponenten */
  komponentId?: string;
}

export type HelpTextLukketEvent = {
  name: typeof HELPTEXT_LUKKET_EVENT;
  properties: HelpTextLukketProperties;
};
