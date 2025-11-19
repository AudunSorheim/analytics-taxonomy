/**
 * Avkrysningsboks endret - trigges når bruker endrer tilstanden til checkboxen
 */
export const AVKRYSNINGSBOKS_ENDRET_EVENT = 'avkrysningsboks endret' as const;

export interface AvkrysningsboksEndretProperties {
  /** Identifikator for avkrysningsboksen */
  checkboxId?: string;
  /** Teksten som beskriver valget */
  tekst?: string;
  /** Ny tilstand (true = huket av, false = ikke huket av) */
  checked?: boolean;
}

export type AvkrysningsboksEndretEvent = {
  name: typeof AVKRYSNINGSBOKS_ENDRET_EVENT;
  properties?: AvkrysningsboksEndretProperties;
};
