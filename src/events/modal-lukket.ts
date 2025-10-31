/**
 * Modal lukket event - triggers when a modal is closed
 */
export const MODAL_LUKKET_EVENT = 'modal lukket' as const;

export interface ModalLukketProperties {
  /** Text content or title of the modal */
  tekst?: string;
}

export type ModalLukketEvent = {
  name: typeof MODAL_LUKKET_EVENT;
  properties?: ModalLukketProperties;
};
