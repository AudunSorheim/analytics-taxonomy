/**
 * Chat startet event - user starts a chat session
 */
export const CHAT_STARTET_EVENT = 'chat startet' as const;

export interface ChatStartetProperties {
  /** Component where chat was started */
  komponent?: string;
}

export type ChatStartetEvent = {
  name: typeof CHAT_STARTET_EVENT;
  properties?: ChatStartetProperties;
};
