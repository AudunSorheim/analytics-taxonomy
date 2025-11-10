/**
 * Chat avsluttet-hendelse - trigges når en bruker avslutter en chat
 */
export const CHAT_AVSLUTTET_EVENT = 'chat avsluttet' as const;

export interface ChatAvsluttetProperties {
  /** Komponenten der chatten ble avsluttet */
  komponent?: string;
}

export type ChatAvsluttetEvent = {
  name: typeof CHAT_AVSLUTTET_EVENT;
  properties?: ChatAvsluttetProperties;
};
