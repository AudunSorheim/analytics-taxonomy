# NAV Analytics Taxonomy


Type-definisjoner for analytics-hendelser brukt på tvers av Nav sine digitale tjenester. Logg direkte til Umami, eller via `getAnalyticsInstance` fra `@navikt/nav-dekoratoren-moduler`.


## Installasjon

```bash
npm install @navikt/analytics-taxonomy
```

## Kom i gang

```typescript
import { Events, type NavigereProperties } from '@navikt/analytics-taxonomy';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance();

const properties: NavigereProperties = {
  lenketekst: 'Les mer',
  destinasjon: '/side/info'
};

analytics.logEvent(Events.NAVIGERE, properties);
```

## Tilgjengelige hendelser

### Aksel-komponenter

#### Accordion
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| accordion åpnet | `ACCORDION_APNET` | Bruker åpnet en accordion | `komponentId`, `tittel` |
| accordion lukket | `ACCORDION_LUKKET` | Bruker lukket en accordion | `komponentId`, `tittel` |

#### ActionMenu
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| actionmenu åpnet | `ACTIONMENU_APNET` | Menyen ekspanderes | `komponentId`, `triggerTekst`, `aarsak`, `interaksjonsMetode`, `kontrollert`, `align`, `harUndermenyer`, `aktiveSti` |
| actionmenu lukket | `ACTIONMENU_LUKKET` | Menyen kollapser | `komponentId`, `lukkAarsak`, `interaksjonsMetode`, `aktiveSti`, `sistValgteValgId`, `sistValgteValgTekst` |
| actionmenu valg valgt | `ACTIONMENU_VALG_VALGT` | Valg aktiveres i menyen | `komponentId`, `valgId`, `valgTekst`, `indeks`, `interaksjonsMetode`, `valgType`, `gruppeId`, `gruppeLabel`, `radioGroup`, `checked`, `shortcut`, `undermenySti`, `disabled` |
| actionmenu undermeny åpnet | `ACTIONMENU_UNDERMENY_APNET` | Submeny ekspanderes | `komponentId`, `sti`, `triggerTekst`, `niva`, `forelderValgId`, `interaksjonsMetode` |
| actionmenu undermeny lukket | `ACTIONMENU_UNDERMENY_LUKKET` | Submeny kollapser | `komponentId`, `sti`, `triggerTekst`, `niva`, `lukkAarsak`, `interaksjonsMetode` |

#### Alert
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| alert vist | `ALERT_VIST` | Varsel/melding vist | `variant`, `tekst` |
| alert lukket | `ALERT_LUKKET` | Varsel lukket av bruker (krever closeButton) | `variant`, `tekst` |

#### Button
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| knapp klikket | `KNAPP_KLIKKET` | Klikk på Aksel-knapp | `tekst`, `variant`, `size` |

#### Checkbox
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| avkrysningsboks endret | `AVKRYSNINGSBOKS_ENDRET` | Checkbox endrer tilstand | `checkboxId`, `tekst`, `checked` |

#### Chips
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| chip toggled | `CHIP_TOGGLED` | Chips.Toggle endrer tilstand | `tekst`, `chipVerdi`, `selected`, `variant` |
| chip fjernet | `CHIP_FJERNET` | Chips.Removable fjernes | `tekst`, `chipVerdi`, `variant` |

#### Combobox
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| combobox option toggled | `COMBOBOX_OPTION_TOGGLED` | Alternativ velges/fjernes i combobox | `optionValue`, `optionText`, `isSelected`, `isCustomOption`, `isMultiSelect` |

#### CopyButton
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| tekst kopiert | `TEKST_KOPIERT` | Kopier-knapp brukt | `tekst` |

#### DatePicker
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| dato valgt | `DATO_VALGT` | Dato velges i kalender | `datoVerdi`, `datoFelt`, `mode`, `from`, `to` |

#### MonthPicker
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| monthpicker måned valgt | `MONTHPICKER_MANED_VALGT` | Bruker velger en måned | `komponentId`, `maned`, `forrigeManed` |

#### ErrorSummary
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| errorsummary vist | `ERROR_SUMMARY_VIST` | Feiloppsummering vist | `antallFeil`, `feltMedFeil`, `kontekst` |
| errorsummary feilmelding klikket | `ERROR_SUMMARY_FEILMELDING_KLIKKET` | Bruker klikker på feilmelding | `feltId`, `feilIndeks`, `feilmelding`, `harFokus` |

#### ExpansionCard
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| utvidbart kort åpnet | `UTVIDBART_KORT_APNET` | Kort utvides | `kortId`, `tittel` |
| utvidbart kort lukket | `UTVIDBART_KORT_LUKKET` | Kort lukkes | `kortId`, `tittel` |

#### FileUpload
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| fil lastet opp | `FIL_LASTET_OPP` | Fil blir lastet opp | `filNavn`, `filStorrelse`, `filType` |
| fil fjernet | `FIL_FJERNET` | Fil fjernes | `filNavn` |

#### FormProgress
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| formprogress steg vist | `FORMPROGRESS_STEG_VIST` | Fremdriftsvisning oppdateres | `komponentId`, `aktivtSteg`, `totaltAntallSteg`, `prosentFullfort`, `erInteraktivt` |
| formprogress steg klikket | `FORMPROGRESS_STEG_KLIKKET` | Bruker klikker på steg | `komponentId`, `klikketSteg`, `aktivtSteg`, `retning`, `stegFullfort`, `navigasjonTillatt` |

#### FormSummary
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| formsummary vist | `FORMSUMMARY_VIST` | Skjemaoppsummering vist | `komponentId`, `antallFelt`, `erRedigerbar` |
| formsummary felt redigert | `FORMSUMMARY_FELT_REDIGERT` | Bruker redigerer felt fra oppsummeringen | `komponentId`, `feltId`, `feltLabel`, `stegNummer`, `redigeringsMetode` |

#### GuidePanel
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| guidepanel vist | `GUIDEPANEL_VIST` | Guidepanel synliggjøres | `tekst`, `komponent` |

#### HelpText
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| helptext vist | `HELPTEXT_VIST` | Hjelpetekst åpnes | `komponentId`, `tekst`, `placement` |
| helptext lukket | `HELPTEXT_LUKKET` | Hjelpetekst skjules | `komponentId` |

#### Link
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| link klikket | `LINK_KLIKKET` | Link-komponent klikket | `komponentId`, `href`, `tekst`, `apnerINyttVindu`, `variant`, `erEkstern` |

#### LinkCard
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| linkcard klikket | `LINKCARD_KLIKKET` | Kortet leder brukeren videre | `komponentId`, `tittel`, `destinasjon`, `seksjon` |

#### Modal
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| modal åpnet | `MODAL_APNET` | Modal-dialog åpnes | `modalId`, `tittel` |
| modal lukket | `MODAL_LUKKET` | Modal-dialog lukkes | `modalId`, `tittel`, `lukkMetode`, `varighetMs`, `harEndringer` |

#### Popover
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| popover åpnet | `POPOVER_APNET` | Popover vises | `komponentId`, `triggerId`, `variant` |
| popover lukket | `POPOVER_LUKKET` | Popover skjules | `komponentId`, `lukkMetode` |

#### Tooltip
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| tooltip vist | `TOOLTIP_VIST` | Tooltip vises ved hover/fokus | `tekst`, `komponentId` |
| tooltip lukket | `TOOLTIP_LUKKET` | Tooltip skjules | `komponentId` |

#### Pagination
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| paginering side valgt | `PAGINERING_SIDE_VALGT` | Bruker går til ny side | `komponentId`, `side`, `forrigeSide`, `antallSider`, `navigasjonsType`, `harNeste`, `harForrige` |
| paginering størrelse endret | `PAGINERING_STORRELSE_ENDRET` | Antall elementer per side endres | `komponentId`, `nyStorrelse`, `forrigeStorrelse`, `antallElementer` |

#### ReadMore
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| les mer åpnet | `LES_MER_APNET` | ReadMore åpnes | `lesMerId`, `tittel` |
| les mer lukket | `LES_MER_LUKKET` | ReadMore lukkes | `lesMerId`, `tittel` |

#### Search
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| søk gjennomført | `SOK` | Bruker fullfører et søk | `tekst`, `søkeResultater`, `harResultater`, `sokefrase`, `sortering`, `aktiveFiltre`, `responstidMs` |
| søkeforslag valgt | `SOKEFORSLAG_VALGT` | Forslag velges fra listen | `valgtForslag` |

#### Select (Nedtrekksliste)
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| nedtrekksliste valg endret | `NEDTREKKSLISTE_VALG_ENDRET` | Select endrer verdi | `valgtVerdi`, `tekst`, `listeId` |

#### Radio
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| radio valg endret | `RADIO_VALG_ENDRET` | Nytt radioalternativ velges | `gruppeId`, `valgtAlternativ`, `forrigeAlternativ`, `antallAlternativer` |

#### Table
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| tabell sortering endret | `TABELL_SORTERING_ENDRET` | Bruker sorterer en kolonne | `komponentId`, `kolonne`, `retning` |
| tabell rad valgt | `TABELL_RAD_VALGT` | Rad velges eller fjernes | `komponentId`, `radId`, `radIndeks`, `erValgt` |
| tabell filter anvendt | `TABELL_FILTER_ANVENDT` | Bruker filtrerer tabell | `komponentId`, `kolonneId`, `filterVerdi`, `antallAktiveFiltre`, `antallRaderEtterFilter` |
| tabell rad utvidet | `TABELL_RAD_UTVIDET` | Utvidbar rad ekspanderes/kollapses | `komponentId`, `radId`, `radIndeks`, `erUtvidet`, `niva` |

#### Tabs
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| fane byttet | `FANE_BYTTET` | Bruker bytter fane | `tabsId`, `fraFane`, `tilFane`, `tilFaneTekst`, `navigasjonsMetode`, `antallFaner`, `selectionFollowsFocus` |

#### ToggleGroup
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| togglegroup valgt | `TOGGLEGROUP_VALGT` | Bruker velger en toggle | `komponentId`, `valgtVerdi` |

#### Tag
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| tag fjernet | `TAG_FJERNET` | Tag fjernes/lukkes | `tagId`, `tekst`, `aarsak` |

#### Stepper
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| stepper steg endret | `STEPPER_STEG_ENDRET` | Bruker navigerer til nytt steg | `komponentId`, `stegId`, `stegIndeks`, `handling`, `retning`, `totaltAntallSteg`, `forrigeStegFullfort` |

#### Switch
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| switch tilstand endret | `SWITCH_TILSTAND_ENDRET` | Bryter slås av/på | `komponentId`, `erPa`, `varPa`, `aarsak` |

#### Textarea
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| textarea utfylt | `TEXTAREA_UTFYLT` | Tekstområde oppdateres | `feltId`, `feltNavn`, `harVerdi`, `tegnlengde` |

#### TextField
| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| tekstfelt utfylt | `TEKSTFELT_UTFYLT` | Tekstfelt får eller mister verdi | `feltId`, `feltNavn`, `harVerdi` |

### Andre hendelser

| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| besøk | `BESOK` | Sidevisning | `url`, `sidetittel` |
| filtervalg | `FILTERVALG` | Bruker anvendte filtre | `kategori`, `filternavn` |
| last ned | `LAST_NED` | Bruker lastet ned en fil | `type`, `tema`, `tittel` |
| navigere | `NAVIGERE` | Bruker klikket på en lenke | `lenketekst`, `destinasjon` |
| skjema åpnet | `SKJEMA_APNET` | Skjema åpnet | `skjemanavn`, `skjemaId` |
| skjema startet | `SKJEMA_STARTET` | Bruker begynte å fylle ut skjema | `skjemanavn`, `skjemaId` |
| skjema spørsmål besvart | `SKJEMA_SPORSMAL_BESVART` | Skjemaspørsmål besvart | `skjemanavn`, `skjemaId`, `spørsmål`, `svar` |
| skjema steg fullført | `SKJEMA_STEG_FULLFORT` | Skjemasteg fullført | `skjemanavn`, `skjemaId`, `steg` |
| skjema validering feilet | `SKJEMA_VALIDERING_FEILET` | Skjemavalidering feilet | `skjemanavn`, `skjemaId` |
| skjema innsending feilet | `SKJEMA_INNSENDING_FEILET` | Skjemainnsending feilet | `skjemanavn`, `skjemaId` |
| skjema fullført | `SKJEMA_FULLFORT` | Skjema fullført | `skjemanavn`, `skjemaId` |

## Avansert bruk

### Lag din egen log-funksjon med `TaxonomyEvent`

```typescript
import { Events, type TaxonomyEvent } from '@navikt/analytics-taxonomy';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance();

function logTaxonomyEvent(event: TaxonomyEvent) {
  analytics.logEvent(event.name, event.properties);
}

logTaxonomyEvent({
  name: Events.NAVIGERE,
  properties: {
    lenketekst: 'Gå til innsending',
    destinasjon: '/skjema/innsending'
  }
});
```

### Dersom du ønsker å legge til dine egne properties i tillegg:

```typescript
import {
  Events,
  type TaxonomyEvent,
  isValidEventName
} from '@navikt/analytics-taxonomy';

const analytics = getAnalyticsInstance();

type TaxonomyEventWithExtra = TaxonomyEvent & {
  properties?: TaxonomyEvent['properties'] & Record<string, unknown>;
};

function logWithExtra(event: TaxonomyEventWithExtra) {
  analytics.logEvent(event.name, event.properties);
}

logWithExtra({
  name: Events.SOK,
  properties: {
    søkeord: 'økonomi',
    destinasjon: '/artikler/sok',
    komponent: 'globalt-søk',
    kilde: 'intern'
  }
});
```

## For bidragsytere

### Om taksonomien

Denne taksonomien sikrer konsistent analytics på tvers av NAVs applikasjoner ved å:

- **Standardisere hendelsenavn** - Følger naturlige språkkonvensjoner (f.eks. "skjema åpnet")
- **Type-sikkerhet** - Forhindrer skrivefeil og sikrer korrekte properties
- **Gjenbrukbarhet** - Team kan dele hendelsesdefinisjoner på tvers av tjenester
- **Personvernoverensstemmelse** - Kun godkjente, ikke-sensitive properties

Navngivningen følger Nav sitt [designsystem (Aksel)](https://aksel.nav.no/designsystem) for å spore komponentbruk.

### Legge til nye hendelser

**Før du foreslår en ny hendelse:**
- Vurder: Hvilket problem løser dette?
- Spør: Vil dette hjelpe team å forstå brukeradferd eller måle selvbetjening?
- Sjekk: Finnes det allerede en lignende hendelse?

**Navnekonvensjoner:**
- Bruk naturlig språk: "skjema åpnet" (ikke "form_opened")
- Skal leses godt i en setning: "Skjemaet ble **åpnet** av brukeren"
- Bruk camelCase for properties: `pagePath`, `lenketekst`
- Alle properties er valgfrie (bruk `?:`)

**Slik legger du til en ny hendelse:**

1. Opprett en ny fil i riktig mappe under `src/events/`. For Aksel-komponenter brukes `src/events/aksel/<komponent>/` (f.eks. `src/events/aksel/accordion/`).
  ```bash
  src/events/mitt-komponent/mitt-nye-event.ts
  ```

2. Følg denne strukturen:
   ```typescript
   /**
    * Beskrivelse av når denne hendelsen utløses
    */
   export const MITT_NYE_EVENT = 'mitt nye event' as const;

   export interface MittNyeEventProperties {
     /** Beskrivelse av denne propertyen */
     propertyNavn?: string;
     /** En annen property */
     annenProperty?: number;
   }

   export type MittNyeEventEvent = {
     name: typeof MITT_NYE_EVENT;
     properties?: MittNyeEventProperties;
   };
   ```

3. Legg til i `src/index.ts`:
   ```typescript
   // Legg til export
   export * from './events/mitt-nye-event';
   
   // Legg til i Events-objektet
   export const Events = {
     // ... eksisterende events
     MITT_NYE_EVENT,
   } as const;
   
   // Legg til i TaxonomyEvent union
   export type TaxonomyEvent =
     | // ... eksisterende typer
     | MittNyeEventEvent;
   ```

4. Test bygget:
   ```bash
   npm run build
   ```

5. Send inn en Pull Request med:
   - Klar beskrivelse av bruksområdet
   - Eksempel på bruk
   - Hvilket team/applikasjon som trenger det

### Utvikling

```bash
# Installer avhengigheter
npm install

# Kjør tester
npm test

# Bygg
npm run build
```

### Publisering

Pakken publiseres automatisk til npm når endringer merges til `main`.

**Slik publiserer du en ny versjon:**

1. Gjør endringene dine
2. Oppdater `CHANGELOG.md` med en kort, tydelig oppsummering av endringene.
3. Oppdater versjon i `package.json`:
   ```bash
   npm version patch  # Bugfikser, dokumentasjon
   npm version minor  # Nye hendelser eller properties (ikke-breaking)
   npm version major  # Breaking changes (fjerne/endre typer)
   ```
4. Push med tags:
   ```bash
   git push && git push --tags
   ```

GitHub Actions vil automatisk teste, bygge og publisere hvis versjonen er ny.

## Bakgrunn

NAV bruker en felles analytics-taksonomi for å:
- Sikre datakvalitet og konsistens
- Muliggjøre sammenligninger på tvers av team
- Forenkle implementering av metrikker
- Overholde personvernregler (GDPR, personvernerklæring)

For mer informasjon, se [NAVs personvernerklæring](https://nav.no).

## Lisens

[MIT](LICENSE)


