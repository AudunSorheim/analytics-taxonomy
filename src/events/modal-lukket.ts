/**
 * Modal lukket-hendelse - trigges når en modal lukkes
 */
export const MODAL_LUKKET_EVENT = 'modal lukket' as const;

export interface ModalLukketProperties {
  /** Tekstinnhold eller tittel på modalen */
  tekst?: string;
}

export type ModalLukketEvent = {
  name: typeof MODAL_LUKKET_EVENT;
  properties?: ModalLukketProperties;
};
