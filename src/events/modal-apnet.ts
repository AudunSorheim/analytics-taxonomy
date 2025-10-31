/**
 * Modal åpnet event - triggers when a modal is opened
 */
export const MODAL_APNET_EVENT = 'modal åpnet' as const;

export interface ModalApnetProperties {
  /** Text content or title of the modal */
  tekst?: string;
}

export type ModalApnetEvent = {
  name: typeof MODAL_APNET_EVENT;
  properties?: ModalApnetProperties;
};
