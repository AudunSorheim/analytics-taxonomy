/**
 * Les mer åpnet - trigges når en ReadMore utvides
 */
export const LES_MER_APNET_EVENT = 'les mer åpnet' as const;

export interface LesMerApnetProperties {
  /** Identifikator for komponenten */
  lesMerId?: string;
  /** Tittelen til seksjonen */
  tittel?: string;
}

export type LesMerApnetEvent = {
  name: typeof LES_MER_APNET_EVENT;
  properties: LesMerApnetProperties;
};
