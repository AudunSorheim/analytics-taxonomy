/**
 * Chat startet-hendelse - trigges når en bruker starter en chat
 */
export const CHAT_STARTET_EVENT = 'chat startet' as const;

export interface ChatStartetProperties {
  /** Komponenten der chatten ble startet */
  komponent?: string;
}

export type ChatStartetEvent = {
  name: typeof CHAT_STARTET_EVENT;
  properties?: ChatStartetProperties;
};
