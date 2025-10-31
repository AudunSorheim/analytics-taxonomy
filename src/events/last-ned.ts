/**
 * Last ned event - user downloads a file
 */
export const LAST_NED_EVENT = 'last ned' as const;

export interface LastNedProperties {
  /** File type (e.g., PDF, Excel) */
  type?: string;
  /** Theme/category of the download */
  tema?: string;
  /** Title of the downloaded file */
  tittel?: string;
}

export type LastNedEvent = {
  name: typeof LAST_NED_EVENT;
  properties?: LastNedProperties;
};
