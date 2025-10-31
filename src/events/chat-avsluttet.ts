/**
 * Chat avsluttet event - user ends a chat session
 */
export const CHAT_AVSLUTTET_EVENT = 'chat avsluttet' as const;

export interface ChatAvsluttetProperties {
  /** Component where chat was closed */
  komponent?: string;
}

export type ChatAvsluttetEvent = {
  name: typeof CHAT_AVSLUTTET_EVENT;
  properties?: ChatAvsluttetProperties;
};
