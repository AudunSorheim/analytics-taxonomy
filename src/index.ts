/**
 * NAV Analytics Types
 *
 * Typesikre definisjoner for analysehendelser som brukes på tvers av NAV.
 * Kan logges til Umami direkte, eller via `getAnalyticsInstance` fra @navikt/nav-dekoratoren-moduler.
 *
 * @example
 * ```typescript
 * import { Events, type NavigereProperties } from '@navikt/analytics-types';
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

// Eksporterer alle event-typer og properties
export * from './events/aksel/accordion/apnet';
export * from './events/aksel/accordion/lukket';
export * from './events/aksel/actionmenu/apnet';
export * from './events/aksel/actionmenu/lukket';
export * from './events/aksel/actionmenu/valg-valgt';
export * from './events/aksel/actionmenu/undermeny-apnet';
export * from './events/aksel/actionmenu/undermeny-lukket';
export * from './events/aksel/actionmenu/types';
export * from './events/aksel/alert/lukket';
export * from './events/aksel/alert/vist';
export * from './events/aksel/globalalert/vist';
export * from './events/aksel/globalalert/lukket';
export * from './events/aksel/localalert/vist';
export * from './events/aksel/localalert/lukket';
export * from './events/aksel/inlinemessage/vist';
export * from './events/aksel/infocard/vist';
export * from './events/aksel/process/vist';
export * from './events/aksel/process/steg-klikket';
export * from './events/aksel/checkbox/endret';
export * from './events/besok/besok';
export * from './events/aksel/chips/fjernet';
export * from './events/aksel/chips/toggled';
export * from './events/aksel/combobox/option-toggled';
export * from './events/aksel/datepicker/dato-valgt';
export * from './events/aksel/errorsummary/vist';
export * from './events/aksel/errorsummary/feilmelding-klikket';
export * from './events/aksel/tabs/fane-byttet';
export * from './events/aksel/togglegroup/valgt';
export * from './events/aksel/file-upload/fil-fjernet';
export * from './events/aksel/file-upload/fil-lastet-opp';
export * from './events/filtervalg/filtervalg';
export * from './events/aksel/formprogress/steg-vist';
export * from './events/aksel/formprogress/steg-klikket';
export * from './events/aksel/formsummary/vist';
export * from './events/aksel/formsummary/felt-redigert';
export * from './events/aksel/guidepanel/vist';
export * from './events/aksel/helptext/vist';
export * from './events/aksel/helptext/lukket';
export * from './events/aksel/button/knapp-klikket';
export * from './events/aksel/link/klikket';
export * from './events/aksel/link-card/klikket';
export * from './events/last-ned/last-ned';
export * from './events/aksel/pagination/side-valgt';
export * from './events/aksel/pagination/storrelse-endret';
export * from './events/aksel/popover/apnet';
export * from './events/aksel/popover/lukket';
export * from './events/aksel/read-more/apnet';
export * from './events/aksel/read-more/lukket';
export * from './events/aksel/modal/apnet';
export * from './events/aksel/modal/lukket';
export * from './events/aksel/monthpicker/maned-valgt';
export * from './events/navigere/navigere';
export * from './events/aksel/select/nedtrekksliste-valg-endret';
export * from './events/aksel/radio/valg-endret';
export * from './events/aksel/table/sortering-endret';
export * from './events/aksel/table/rad-valgt';
export * from './events/aksel/table/filter-anvendt';
export * from './events/aksel/table/rad-utvidet';
export * from './events/aksel/stepper/steg-endret';
export * from './events/skjema/apnet';
export * from './events/skjema/fullfort';
export * from './events/skjema/innsending-feilet';
export * from './events/skjema/sporsmal-besvart';
export * from './events/skjema/startet';
export * from './events/skjema/steg-fullfort';
export * from './events/skjema/validering-feilet';
export * from './events/aksel/search/sok';
export * from './events/aksel/search/sokeforslag-valgt';
export * from './events/aksel/switch/tilstand-endret';
export * from './events/aksel/copy-button/tekst-kopiert';
export * from './events/aksel/tag/fjernet';
export * from './events/aksel/textarea/utfylt';
export * from './events/aksel/textfield/tekstfelt-utfylt';
export * from './events/aksel/tooltip/vist';
export * from './events/aksel/tooltip/lukket';
export * from './events/aksel/expansion-card/utvidbart-kort-apnet';
export * from './events/aksel/expansion-card/utvidbart-kort-lukket';

// Importerer hendelsesnavn for samlet objekt
import { ACCORDION_APNET_EVENT } from './events/aksel/accordion/apnet';
import { ACCORDION_LUKKET_EVENT } from './events/aksel/accordion/lukket';
import { ACTIONMENU_APNET_EVENT } from './events/aksel/actionmenu/apnet';
import { ACTIONMENU_LUKKET_EVENT } from './events/aksel/actionmenu/lukket';
import { ACTIONMENU_VALG_VALGT_EVENT } from './events/aksel/actionmenu/valg-valgt';
import { ACTIONMENU_UNDERMENY_APNET_EVENT } from './events/aksel/actionmenu/undermeny-apnet';
import { ACTIONMENU_UNDERMENY_LUKKET_EVENT } from './events/aksel/actionmenu/undermeny-lukket';
import { ALERT_LUKKET_EVENT } from './events/aksel/alert/lukket';
import { ALERT_VIST_EVENT } from './events/aksel/alert/vist';
import { GLOBALALERT_VIST_EVENT } from './events/aksel/globalalert/vist';
import { GLOBALALERT_LUKKET_EVENT } from './events/aksel/globalalert/lukket';
import { LOCALALERT_VIST_EVENT } from './events/aksel/localalert/vist';
import { LOCALALERT_LUKKET_EVENT } from './events/aksel/localalert/lukket';
import { INLINEMESSAGE_VIST_EVENT } from './events/aksel/inlinemessage/vist';
import { INFOCARD_VIST_EVENT } from './events/aksel/infocard/vist';
import { PROCESS_VIST_EVENT } from './events/aksel/process/vist';
import { PROCESS_STEG_KLIKKET_EVENT } from './events/aksel/process/steg-klikket';
import { AVKRYSNINGSBOKS_ENDRET_EVENT } from './events/aksel/checkbox/endret';
import { BESOK_EVENT } from './events/besok/besok';
import { CHIP_FJERNET_EVENT } from './events/aksel/chips/fjernet';
import { CHIP_TOGGLED_EVENT } from './events/aksel/chips/toggled';
import { COMBOBOX_OPTION_TOGGLED_EVENT } from './events/aksel/combobox/option-toggled';
import { DATO_VALGT_EVENT } from './events/aksel/datepicker/dato-valgt';
import { ERROR_SUMMARY_VIST_EVENT } from './events/aksel/errorsummary/vist';
import { ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT } from './events/aksel/errorsummary/feilmelding-klikket';
import { FANE_BYTTET_EVENT } from './events/aksel/tabs/fane-byttet';
import { TOGGLEGROUP_VALGT_EVENT } from './events/aksel/togglegroup/valgt';
import { FIL_FJERNET_EVENT } from './events/aksel/file-upload/fil-fjernet';
import { FIL_LASTET_OPP_EVENT } from './events/aksel/file-upload/fil-lastet-opp';
import { FILTERVALG_EVENT } from './events/filtervalg/filtervalg';
import { FORMPROGRESS_STEG_VIST_EVENT } from './events/aksel/formprogress/steg-vist';
import { FORMPROGRESS_STEG_KLIKKET_EVENT } from './events/aksel/formprogress/steg-klikket';
import { FORMSUMMARY_VIST_EVENT } from './events/aksel/formsummary/vist';
import { FORMSUMMARY_FELT_REDIGERT_EVENT } from './events/aksel/formsummary/felt-redigert';
import { GUIDEPANEL_VIST_EVENT } from './events/aksel/guidepanel/vist';
import { HELPTEXT_LUKKET_EVENT } from './events/aksel/helptext/lukket';
import { HELPTEXT_VIST_EVENT } from './events/aksel/helptext/vist';
import { KNAPP_KLIKKET_EVENT } from './events/aksel/button/knapp-klikket';
import { LINK_KLIKKET_EVENT } from './events/aksel/link/klikket';
import { LINKCARD_KLIKKET_EVENT } from './events/aksel/link-card/klikket';
import { LAST_NED_EVENT } from './events/last-ned/last-ned';
import { PAGINERING_SIDE_VALGT_EVENT } from './events/aksel/pagination/side-valgt';
import { PAGINERING_STORRELSE_ENDRET_EVENT } from './events/aksel/pagination/storrelse-endret';
import { POPOVER_APNET_EVENT } from './events/aksel/popover/apnet';
import { POPOVER_LUKKET_EVENT } from './events/aksel/popover/lukket';
import { LES_MER_APNET_EVENT } from './events/aksel/read-more/apnet';
import { LES_MER_LUKKET_EVENT } from './events/aksel/read-more/lukket';
import { MODAL_APNET_EVENT } from './events/aksel/modal/apnet';
import { MODAL_LUKKET_EVENT } from './events/aksel/modal/lukket';
import { MONTHPICKER_MANED_VALGT_EVENT } from './events/aksel/monthpicker/maned-valgt';
import { NAVIGERE_EVENT } from './events/navigere/navigere';
import { NEDTREKKSLISTE_VALG_ENDRET_EVENT } from './events/aksel/select/nedtrekksliste-valg-endret';
import { RADIO_VALG_ENDRET_EVENT } from './events/aksel/radio/valg-endret';
import { TABELL_RAD_VALGT_EVENT } from './events/aksel/table/rad-valgt';
import { TABELL_SORTERING_ENDRET_EVENT } from './events/aksel/table/sortering-endret';
import { TABELL_FILTER_ANVENDT_EVENT } from './events/aksel/table/filter-anvendt';
import { TABELL_RAD_UTVIDET_EVENT } from './events/aksel/table/rad-utvidet';
import { STEPPER_STEG_ENDRET_EVENT } from './events/aksel/stepper/steg-endret';
import { SKJEMA_APNET_EVENT } from './events/skjema/apnet';
import { SKJEMA_FULLFORT_EVENT } from './events/skjema/fullfort';
import { SKJEMA_INNSENDING_FEILET_EVENT } from './events/skjema/innsending-feilet';
import { SKJEMA_SPORSMAL_BESVART_EVENT } from './events/skjema/sporsmal-besvart';
import { SKJEMA_STARTET_EVENT } from './events/skjema/startet';
import { SKJEMA_STEG_FULLFORT_EVENT } from './events/skjema/steg-fullfort';
import { SKJEMA_VALIDERING_FEILET_EVENT } from './events/skjema/validering-feilet';
import { SOK_EVENT } from './events/aksel/search/sok';
import { SOKEFORSLAG_VALGT_EVENT } from './events/aksel/search/sokeforslag-valgt';
import { SWITCH_TILSTAND_ENDRET_EVENT } from './events/aksel/switch/tilstand-endret';
import { TAG_FJERNET_EVENT } from './events/aksel/tag/fjernet';
import { TEKST_KOPIERT_EVENT } from './events/aksel/copy-button/tekst-kopiert';
import { TEXTAREA_UTFYLT_EVENT } from './events/aksel/textarea/utfylt';
import { TEKSTFELT_UTFYLT_EVENT } from './events/aksel/textfield/tekstfelt-utfylt';
import { TOOLTIP_LUKKET_EVENT } from './events/aksel/tooltip/lukket';
import { TOOLTIP_VIST_EVENT } from './events/aksel/tooltip/vist';
import { UTVIDBART_KORT_APNET_EVENT } from './events/aksel/expansion-card/utvidbart-kort-apnet';
import { UTVIDBART_KORT_LUKKET_EVENT } from './events/aksel/expansion-card/utvidbart-kort-lukket';

// Importerer event-typer for union
import type { AccordionApnetEvent } from './events/aksel/accordion/apnet';
import type { AccordionLukketEvent } from './events/aksel/accordion/lukket';
import type { ActionMenuApnetEvent } from './events/aksel/actionmenu/apnet';
import type { ActionMenuLukketEvent } from './events/aksel/actionmenu/lukket';
import type { ActionMenuValgValgtEvent } from './events/aksel/actionmenu/valg-valgt';
import type { ActionMenuUndermenyApnetEvent } from './events/aksel/actionmenu/undermeny-apnet';
import type { ActionMenuUndermenyLukketEvent } from './events/aksel/actionmenu/undermeny-lukket';
import type { AlertLukketEvent } from './events/aksel/alert/lukket';
import type { AlertVistEvent } from './events/aksel/alert/vist';
import type { GlobalAlertVistEvent } from './events/aksel/globalalert/vist';
import type { GlobalAlertLukketEvent } from './events/aksel/globalalert/lukket';
import type { LocalAlertVistEvent } from './events/aksel/localalert/vist';
import type { LocalAlertLukketEvent } from './events/aksel/localalert/lukket';
import type { InlineMessageVistEvent } from './events/aksel/inlinemessage/vist';
import type { InfoCardVistEvent } from './events/aksel/infocard/vist';
import type { ProcessVistEvent } from './events/aksel/process/vist';
import type { ProcessStegKlikketEvent } from './events/aksel/process/steg-klikket';
import type { AvkrysningsboksEndretEvent } from './events/aksel/checkbox/endret';
import type { BesokEvent } from './events/besok/besok';
import type { ChipFjernetEvent } from './events/aksel/chips/fjernet';
import type { ChipToggledEvent } from './events/aksel/chips/toggled';
import type { ComboboxOptionToggledEvent } from './events/aksel/combobox/option-toggled';
import type { DatoValgtEvent } from './events/aksel/datepicker/dato-valgt';
import type { ErrorSummaryVistEvent } from './events/aksel/errorsummary/vist';
import type { ErrorSummaryFeilmeldingKlikketEvent } from './events/aksel/errorsummary/feilmelding-klikket';
import type { FaneByttetEvent } from './events/aksel/tabs/fane-byttet';
import type { FilFjernetEvent } from './events/aksel/file-upload/fil-fjernet';
import type { FilLastetOppEvent } from './events/aksel/file-upload/fil-lastet-opp';
import type { FiltervalgEvent } from './events/filtervalg/filtervalg';
import type { FormProgressStegVistEvent } from './events/aksel/formprogress/steg-vist';
import type { FormProgressStegKlikketEvent } from './events/aksel/formprogress/steg-klikket';
import type { FormSummaryVistEvent } from './events/aksel/formsummary/vist';
import type { FormSummaryFeltRedigertEvent } from './events/aksel/formsummary/felt-redigert';
import type { GuidepanelVistEvent } from './events/aksel/guidepanel/vist';
import type { HelpTextLukketEvent } from './events/aksel/helptext/lukket';
import type { HelpTextVistEvent } from './events/aksel/helptext/vist';
import type { KnappKlikketEvent } from './events/aksel/button/knapp-klikket';
import type { LinkKlikketEvent } from './events/aksel/link/klikket';
import type { LinkCardKlikketEvent } from './events/aksel/link-card/klikket';
import type { LastNedEvent } from './events/last-ned/last-ned';
import type { PagineringSideValgtEvent } from './events/aksel/pagination/side-valgt';
import type { PagineringStorrelseEndretEvent } from './events/aksel/pagination/storrelse-endret';
import type { LesMerApnetEvent } from './events/aksel/read-more/apnet';
import type { LesMerLukketEvent } from './events/aksel/read-more/lukket';
import type { ModalApnetEvent } from './events/aksel/modal/apnet';
import type { ModalLukketEvent } from './events/aksel/modal/lukket';
import type { MonthPickerManedValgtEvent } from './events/aksel/monthpicker/maned-valgt';
import type { NavigereEvent } from './events/navigere/navigere';
import type { NedtrekkslisteValgEndretEvent } from './events/aksel/select/nedtrekksliste-valg-endret';
import type { PopoverApnetEvent } from './events/aksel/popover/apnet';
import type { PopoverLukketEvent } from './events/aksel/popover/lukket';
import type { RadioValgEndretEvent } from './events/aksel/radio/valg-endret';
import type { SkjemaApnetEvent } from './events/skjema/apnet';
import type { SkjemaFullfortEvent } from './events/skjema/fullfort';
import type { SkjemaInnsendingFeiletEvent } from './events/skjema/innsending-feilet';
import type { SkjemaSporsmalBesvartEvent } from './events/skjema/sporsmal-besvart';
import type { SkjemaStartetEvent } from './events/skjema/startet';
import type { SkjemaStegFullfortEvent } from './events/skjema/steg-fullfort';
import type { SkjemaValideringFeiletEvent } from './events/skjema/validering-feilet';
import type { SokEvent } from './events/aksel/search/sok';
import type { SokeforslagValgtEvent } from './events/aksel/search/sokeforslag-valgt';
import type { StepperStegEndretEvent } from './events/aksel/stepper/steg-endret';
import type { SwitchTilstandEndretEvent } from './events/aksel/switch/tilstand-endret';
import type { TabellRadValgtEvent } from './events/aksel/table/rad-valgt';
import type { TabellSorteringEndretEvent } from './events/aksel/table/sortering-endret';
import type { TabellFilterAnvendtEvent } from './events/aksel/table/filter-anvendt';
import type { TabellRadUtvidetEvent } from './events/aksel/table/rad-utvidet';
import type { TagFjernetEvent } from './events/aksel/tag/fjernet';
import type { TekstKopiertEvent } from './events/aksel/copy-button/tekst-kopiert';
import type { TextareaUtfyltEvent } from './events/aksel/textarea/utfylt';
import type { TekstfeltUtfyltEvent } from './events/aksel/textfield/tekstfelt-utfylt';
import type { TooltipLukketEvent } from './events/aksel/tooltip/lukket';
import type { TooltipVistEvent } from './events/aksel/tooltip/vist';
import type { ToggleGroupValgtEvent } from './events/aksel/togglegroup/valgt';
import type { UtvidbartKortApnetEvent } from './events/aksel/expansion-card/utvidbart-kort-apnet';
import type { UtvidbartKortLukketEvent } from './events/aksel/expansion-card/utvidbart-kort-lukket';

/**
 * Alle hendelsesnavn.
 * Bruk for enkel gjenfinning og autofullføring i applikasjoner.
 */
export const Events = {
  /** Accordion åpnet */
  ACCORDION_APNET: ACCORDION_APNET_EVENT,
  /** Accordion lukket */
  ACCORDION_LUKKET: ACCORDION_LUKKET_EVENT,
  /** ActionMenu åpnet */
  ACTIONMENU_APNET: ACTIONMENU_APNET_EVENT,
  /** ActionMenu lukket */
  ACTIONMENU_LUKKET: ACTIONMENU_LUKKET_EVENT,
  /** ActionMenu valg valgt */
  ACTIONMENU_VALG_VALGT: ACTIONMENU_VALG_VALGT_EVENT,
  /** ActionMenu undermeny åpnet */
  ACTIONMENU_UNDERMENY_APNET: ACTIONMENU_UNDERMENY_APNET_EVENT,
  /** ActionMenu undermeny lukket */
  ACTIONMENU_UNDERMENY_LUKKET: ACTIONMENU_UNDERMENY_LUKKET_EVENT,
  /** Alert lukket */
  ALERT_LUKKET: ALERT_LUKKET_EVENT,
  /** Varsel vist */
  ALERT_VIST: ALERT_VIST_EVENT,
  /** Avkrysningsboks endret */
  AVKRYSNINGSBOKS_ENDRET: AVKRYSNINGSBOKS_ENDRET_EVENT,
  /** Sidebesøk */
  BESOK: BESOK_EVENT,
  /** Chip fjernet */
  CHIP_FJERNET: CHIP_FJERNET_EVENT,
  /** Chip toggled */
  CHIP_TOGGLED: CHIP_TOGGLED_EVENT,
  /** Combobox option toggled */
  COMBOBOX_OPTION_TOGGLED: COMBOBOX_OPTION_TOGGLED_EVENT,
  /** Dato valgt */
  DATO_VALGT: DATO_VALGT_EVENT,
  /** ErrorSummary vist */
  ERROR_SUMMARY_VIST: ERROR_SUMMARY_VIST_EVENT,
  /** ErrorSummary feilmelding klikket */
  ERROR_SUMMARY_FEILMELDING_KLIKKET: ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT,
  /** Fane byttet */
  FANE_BYTTET: FANE_BYTTET_EVENT,
  /** ToggleGroup valgt */
  TOGGLEGROUP_VALGT: TOGGLEGROUP_VALGT_EVENT,
  /** Fil fjernet */
  FIL_FJERNET: FIL_FJERNET_EVENT,
  /** Fil lastet opp */
  FIL_LASTET_OPP: FIL_LASTET_OPP_EVENT,
  /** Filtervalg */
  FILTERVALG: FILTERVALG_EVENT,
  /** FormProgress steg vist */
  FORMPROGRESS_STEG_VIST: FORMPROGRESS_STEG_VIST_EVENT,
  /** FormProgress steg klikket */
  FORMPROGRESS_STEG_KLIKKET: FORMPROGRESS_STEG_KLIKKET_EVENT,
  /** FormSummary vist */
  FORMSUMMARY_VIST: FORMSUMMARY_VIST_EVENT,
  /** FormSummary felt redigert */
  FORMSUMMARY_FELT_REDIGERT: FORMSUMMARY_FELT_REDIGERT_EVENT,
  /** Guidepanel vist */
  GUIDEPANEL_VIST: GUIDEPANEL_VIST_EVENT,
  /** HelpText vist */
  HELPTEXT_VIST: HELPTEXT_VIST_EVENT,
  /** HelpText lukket */
  HELPTEXT_LUKKET: HELPTEXT_LUKKET_EVENT,
  /** Knapp klikket */
  KNAPP_KLIKKET: KNAPP_KLIKKET_EVENT,
  /** Link klikket */
  LINK_KLIKKET: LINK_KLIKKET_EVENT,
  /** LinkCard klikket */
  LINKCARD_KLIKKET: LINKCARD_KLIKKET_EVENT,
  /** Nedlasting */
  LAST_NED: LAST_NED_EVENT,
  /** Popover åpnet */
  POPOVER_APNET: POPOVER_APNET_EVENT,
  /** Popover lukket */
  POPOVER_LUKKET: POPOVER_LUKKET_EVENT,
  /** Paginering side valgt */
  PAGINERING_SIDE_VALGT: PAGINERING_SIDE_VALGT_EVENT,
  /** Paginering størrelse endret */
  PAGINERING_STORRELSE_ENDRET: PAGINERING_STORRELSE_ENDRET_EVENT,
  /** Les mer åpnet */
  LES_MER_APNET: LES_MER_APNET_EVENT,
  /** Les mer lukket */
  LES_MER_LUKKET: LES_MER_LUKKET_EVENT,
  /** Modal åpnet */
  MODAL_APNET: MODAL_APNET_EVENT,
  /** Modal lukket */
  MODAL_LUKKET: MODAL_LUKKET_EVENT,
  /** MonthPicker måned valgt */
  MONTHPICKER_MANED_VALGT: MONTHPICKER_MANED_VALGT_EVENT,
  /** Navigasjon / lenke-klikk */
  NAVIGERE: NAVIGERE_EVENT,
  /** Nedtrekksliste verdi endret */
  NEDTREKKSLISTE_VALG_ENDRET: NEDTREKKSLISTE_VALG_ENDRET_EVENT,
  /** Radio valg endret */
  RADIO_VALG_ENDRET: RADIO_VALG_ENDRET_EVENT,
  /** Tabell sortering endret */
  TABELL_SORTERING_ENDRET: TABELL_SORTERING_ENDRET_EVENT,
  /** Tabell rad valgt */
  TABELL_RAD_VALGT: TABELL_RAD_VALGT_EVENT,
  /** Tabell filter anvendt */
  TABELL_FILTER_ANVENDT: TABELL_FILTER_ANVENDT_EVENT,
  /** Tabell rad utvidet */
  TABELL_RAD_UTVIDET: TABELL_RAD_UTVIDET_EVENT,
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
  /** Stepper steg endret */
  STEPPER_STEG_ENDRET: STEPPER_STEG_ENDRET_EVENT,
  /** Skjema-validering feilet */
  SKJEMA_VALIDERING_FEILET: SKJEMA_VALIDERING_FEILET_EVENT,
  /** Søk gjennomført */
  SOK: SOK_EVENT,
  /** Søkeforslag valgt */
  SOKEFORSLAG_VALGT: SOKEFORSLAG_VALGT_EVENT,
  /** Switch tilstand endret */
  SWITCH_TILSTAND_ENDRET: SWITCH_TILSTAND_ENDRET_EVENT,
  /** Tag fjernet */
  TAG_FJERNET: TAG_FJERNET_EVENT,
  /** Tekst kopiert */
  TEKST_KOPIERT: TEKST_KOPIERT_EVENT,
  /** Textarea utfylt */
  TEXTAREA_UTFYLT: TEXTAREA_UTFYLT_EVENT,
  /** Tekstfelt utfylt */
  TEKSTFELT_UTFYLT: TEKSTFELT_UTFYLT_EVENT,
  /** Tooltip vist */
  TOOLTIP_VIST: TOOLTIP_VIST_EVENT,
  /** Tooltip lukket */
  TOOLTIP_LUKKET: TOOLTIP_LUKKET_EVENT,
  /** Utvidbart kort åpnet */
  UTVIDBART_KORT_APNET: UTVIDBART_KORT_APNET_EVENT,
  /** Utvidbart kort lukket */
  UTVIDBART_KORT_LUKKET: UTVIDBART_KORT_LUKKET_EVENT,
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
  | ActionMenuApnetEvent
  | ActionMenuLukketEvent
  | ActionMenuValgValgtEvent
  | ActionMenuUndermenyApnetEvent
  | ActionMenuUndermenyLukketEvent
  | GlobalAlertVistEvent
  | GlobalAlertLukketEvent
  | LocalAlertVistEvent
  | LocalAlertLukketEvent
  | InlineMessageVistEvent
  | InfoCardVistEvent
  | ProcessVistEvent
  | ProcessStegKlikketEvent
  | GlobalAlertVistEvent
  | GlobalAlertLukketEvent
  | LocalAlertVistEvent
  | LocalAlertLukketEvent
  | InlineMessageVistEvent
  | InfoCardVistEvent
  | ProcessVistEvent
  | ProcessStegKlikketEvent
  | AlertLukketEvent
  | AlertVistEvent
  | AvkrysningsboksEndretEvent
  | BesokEvent
  | ChipFjernetEvent
  | ChipToggledEvent
  | ComboboxOptionToggledEvent
  | DatoValgtEvent
  | ErrorSummaryFeilmeldingKlikketEvent
  | ErrorSummaryVistEvent
  | FaneByttetEvent
  | FilFjernetEvent
  | FilLastetOppEvent
  | FiltervalgEvent
  | FormProgressStegKlikketEvent
  | FormProgressStegVistEvent
  | FormSummaryFeltRedigertEvent
  | FormSummaryVistEvent
  | GuidepanelVistEvent
  | HelpTextVistEvent
  | HelpTextLukketEvent
  | KnappKlikketEvent
  | LinkCardKlikketEvent
  | LinkKlikketEvent
  | LastNedEvent
  | PagineringSideValgtEvent
  | PagineringStorrelseEndretEvent
  | LesMerApnetEvent
  | LesMerLukketEvent
  | ModalApnetEvent
  | ModalLukketEvent
  | MonthPickerManedValgtEvent
  | NavigereEvent
  | NedtrekkslisteValgEndretEvent
  | PopoverApnetEvent
  | PopoverLukketEvent
  | RadioValgEndretEvent
  | SkjemaApnetEvent
  | SkjemaFullfortEvent
  | SkjemaInnsendingFeiletEvent
  | SkjemaSporsmalBesvartEvent
  | SkjemaStartetEvent
  | SkjemaStegFullfortEvent
  | StepperStegEndretEvent
  | SkjemaValideringFeiletEvent
  | SokEvent
  | SokeforslagValgtEvent
  | SwitchTilstandEndretEvent
  | TabellFilterAnvendtEvent
  | TabellRadUtvidetEvent
  | TabellSorteringEndretEvent
  | TabellRadValgtEvent
  | TagFjernetEvent
  | TekstKopiertEvent
  | TextareaUtfyltEvent
  | TekstfeltUtfyltEvent
  | TooltipVistEvent
  | TooltipLukketEvent
  | ToggleGroupValgtEvent
  | UtvidbartKortApnetEvent
  | UtvidbartKortLukketEvent;

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
