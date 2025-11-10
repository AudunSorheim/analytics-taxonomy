/**
 * NAV Analytics Taxonomy
 *
 * Typsikre definisjoner for analysehendelser som brukes på tvers av NAV.
 * Kan kombineres med Umami eller `getAnalyticsInstance` fra @navikt/nav-dekoratoren-moduler.
 *
 * @example
 * ```typescript
 * import { Events, type NavigereProperties } from '@navikt/analytics-taxonomy';
 * import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';
 *
 * const analytics = getAnalyticsInstance();
 *
 * const properties: NavigereProperties = {
 *   lenketekst: 'Les mer',
 *   destinasjon: '/side/info'
 * };
 *
 * analytics.logEvent(Events.NAVIGERE, properties);
 * ```
 */

// Export all event types and properties
export * from './events/accordion-apnet';
export * from './events/accordion-lukket';
export * from './events/alert-vist';
export * from './events/besok';
export * from './events/chat-avsluttet';
export * from './events/chat-startet';
export * from './events/filtervalg';
export * from './events/guidepanel-vist';
export * from './events/last-ned';
export * from './events/modal-apnet';
export * from './events/modal-lukket';
export * from './events/navigere';
export * from './events/skjema-apnet';
export * from './events/skjema-fullfort';
export * from './events/skjema-innsending-feilet';
export * from './events/skjema-sporsmal-besvart';
export * from './events/skjema-startet';
export * from './events/skjema-steg-fullfort';
export * from './events/skjema-validering-feilet';
export * from './events/sok';

// Import event names for centralized object
import { ACCORDION_APNET_EVENT } from './events/accordion-apnet';
import { ACCORDION_LUKKET_EVENT } from './events/accordion-lukket';
import { ALERT_VIST_EVENT } from './events/alert-vist';
import { BESOK_EVENT } from './events/besok';
import { CHAT_AVSLUTTET_EVENT } from './events/chat-avsluttet';
import { CHAT_STARTET_EVENT } from './events/chat-startet';
import { FILTERVALG_EVENT } from './events/filtervalg';
import { GUIDEPANEL_VIST_EVENT } from './events/guidepanel-vist';
import { LAST_NED_EVENT } from './events/last-ned';
import { MODAL_APNET_EVENT } from './events/modal-apnet';
import { MODAL_LUKKET_EVENT } from './events/modal-lukket';
import { NAVIGERE_EVENT } from './events/navigere';
import { SKJEMA_APNET_EVENT } from './events/skjema-apnet';
import { SKJEMA_FULLFORT_EVENT } from './events/skjema-fullfort';
import { SKJEMA_INNSENDING_FEILET_EVENT } from './events/skjema-innsending-feilet';
import { SKJEMA_SPORSMAL_BESVART_EVENT } from './events/skjema-sporsmal-besvart';
import { SKJEMA_STARTET_EVENT } from './events/skjema-startet';
import { SKJEMA_STEG_FULLFORT_EVENT } from './events/skjema-steg-fullfort';
import { SKJEMA_VALIDERING_FEILET_EVENT } from './events/skjema-validering-feilet';
import { SOK_EVENT } from './events/sok';

// Import event types for union
import type { AccordionApnetEvent } from './events/accordion-apnet';
import type { AccordionLukketEvent } from './events/accordion-lukket';
import type { AlertVistEvent } from './events/alert-vist';
import type { BesokEvent } from './events/besok';
import type { ChatAvsluttetEvent } from './events/chat-avsluttet';
import type { ChatStartetEvent } from './events/chat-startet';
import type { FiltervalgEvent } from './events/filtervalg';
import type { GuidepanelVistEvent } from './events/guidepanel-vist';
import type { LastNedEvent } from './events/last-ned';
import type { ModalApnetEvent } from './events/modal-apnet';
import type { ModalLukketEvent } from './events/modal-lukket';
import type { NavigereEvent } from './events/navigere';
import type { SkjemaApnetEvent } from './events/skjema-apnet';
import type { SkjemaFullfortEvent } from './events/skjema-fullfort';
import type { SkjemaInnsendingFeiletEvent } from './events/skjema-innsending-feilet';
import type { SkjemaSporsmalBesvartEvent } from './events/skjema-sporsmal-besvart';
import type { SkjemaStartetEvent } from './events/skjema-startet';
import type { SkjemaStegFullfortEvent } from './events/skjema-steg-fullfort';
import type { SkjemaValideringFeiletEvent } from './events/skjema-validering-feilet';
import type { SokEvent } from './events/sok';

/**
 * Samlet objekt med alle hendelsesnavn.
 * Bruk for enkel gjenfinning og autofullføring i applikasjoner.
 */
export const Events = {
  /** Accordion åpnet */
  ACCORDION_APNET: ACCORDION_APNET_EVENT,
  /** Accordion lukket */
  ACCORDION_LUKKET: ACCORDION_LUKKET_EVENT,
  /** Varsel vist */
  ALERT_VIST: ALERT_VIST_EVENT,
  /** Sidebesøk */
  BESOK: BESOK_EVENT,
  /** Chat avsluttet */
  CHAT_AVSLUTTET: CHAT_AVSLUTTET_EVENT,
  /** Chat startet */
  CHAT_STARTET: CHAT_STARTET_EVENT,
  /** Filtervalg */
  FILTERVALG: FILTERVALG_EVENT,
  /** Guidepanel vist */
  GUIDEPANEL_VIST: GUIDEPANEL_VIST_EVENT,
  /** Nedlasting */
  LAST_NED: LAST_NED_EVENT,
  /** Modal åpnet */
  MODAL_APNET: MODAL_APNET_EVENT,
  /** Modal lukket */
  MODAL_LUKKET: MODAL_LUKKET_EVENT,
  /** Navigasjon / lenke-klikk */
  NAVIGERE: NAVIGERE_EVENT,
  /** Skjema åpnet */
  SKJEMA_APNET: SKJEMA_APNET_EVENT,
  /** Skjema fullført */
  SKJEMA_FULLFORT: SKJEMA_FULLFORT_EVENT,
  /** Skjema-innsending feilet */
  SKJEMA_INNSENDING_FEILET: SKJEMA_INNSENDING_FEILET_EVENT,
  /** Skjema-spørsmål besvart */
  SKJEMA_SPORSMAL_BESVART: SKJEMA_SPORSMAL_BESVART_EVENT,
  /** Skjema startet */
  SKJEMA_STARTET: SKJEMA_STARTET_EVENT,
  /** Skjema-steg fullført */
  SKJEMA_STEG_FULLFORT: SKJEMA_STEG_FULLFORT_EVENT,
  /** Skjema-validering feilet */
  SKJEMA_VALIDERING_FEILET: SKJEMA_VALIDERING_FEILET_EVENT,
  /** Søk utført */
  SOK: SOK_EVENT,
} as const;

/**
 * Union-type for alle gyldige hendelsesnavn.
 */
export type EventName = typeof Events[keyof typeof Events];

/**
 * Union-type for alle hendelser (navn + properties).
 * Nyttig når man lager egne, typesikre wrapper-funksjoner.
 */
export type TaxonomyEvent =
  | AccordionApnetEvent
  | AccordionLukketEvent
  | AlertVistEvent
  | BesokEvent
  | ChatAvsluttetEvent
  | ChatStartetEvent
  | FiltervalgEvent
  | GuidepanelVistEvent
  | LastNedEvent
  | ModalApnetEvent
  | ModalLukketEvent
  | NavigereEvent
  | SkjemaApnetEvent
  | SkjemaFullfortEvent
  | SkjemaInnsendingFeiletEvent
  | SkjemaSporsmalBesvartEvent
  | SkjemaStartetEvent
  | SkjemaStegFullfortEvent
  | SkjemaValideringFeiletEvent
  | SokEvent;

/**
 * Hjelpetype for å hente property-typene basert på hendelsesnavn.
 */
export type PropertiesFor<T extends EventName> = Extract<TaxonomyEvent, { name: T }>['properties'];

/**
 * Type-guard som bekrefter at et navn er en gyldig hendelse i taksonomien.
 */
export function isValidEventName(name: string): name is EventName {
  return Object.values(Events).includes(name as EventName);
}
