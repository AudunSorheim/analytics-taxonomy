/**
 * Link klikket - trigges når en Aksel Link aktiveres
 */
export const LINK_KLIKKET_EVENT = 'link klikket' as const;

export interface LinkKlikketProperties {
  /** Lenketekst */
  tekst?: string;
  /** Destinasjons-URL */
  href?: string;
  /** Om lenken åpner i nytt vindu/tab */
  apnerINyttVindu?: boolean;
  /** Variant av lenken (action, neutral) */
  variant?: 'action' | 'neutral';
  /** Om lenken er intern eller ekstern */
  erEkstern?: boolean;
  /** Kontekst hvor lenken vises */
  kontekst?: string;
}

export type LinkKlikketEvent = {
  name: typeof LINK_KLIKKET_EVENT;
  properties?: LinkKlikketProperties;
};
