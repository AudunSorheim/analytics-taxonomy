/**
 * Modal åpnet-hendelse - trigges når en modal åpnes
 */
export const MODAL_APNET_EVENT = 'modal åpnet' as const;

export interface ModalApnetProperties {
  /** Tekstinnhold eller tittel på modalen */
  tekst?: string;
}

export type ModalApnetEvent = {
  name: typeof MODAL_APNET_EVENT;
  properties?: ModalApnetProperties;
};
