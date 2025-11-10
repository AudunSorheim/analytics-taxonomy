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

| Hendelse | Konstant | Beskrivelse | Properties |
|----------|----------|-------------|------------|
| accordion åpnet | `ACCORDION_APNET` | Bruker åpnet en accordion | `tekst` |
| accordion lukket | `ACCORDION_LUKKET` | Bruker lukket en accordion | `tekst` |
| alert vist | `ALERT_VIST` | Varsel/melding vist | `variant`, `tekst` |
| besøk | `BESOK` | Sidevisning | – |
| chat startet | `CHAT_STARTET` | Bruker startet en chat-sesjon | `komponent` |
| chat avsluttet | `CHAT_AVSLUTTET` | Bruker avsluttet en chat-sesjon | `komponent` |
| filtervalg | `FILTERVALG` | Bruker anvendte filtre | `kategori`, `filternavn` |
| guidepanel vist | `GUIDEPANEL_VIST` | Guidepanel vist | `tekst`, `komponent` |
| last ned | `LAST_NED` | Bruker lastet ned en fil | `type`, `tema`, `tittel` |
| modal åpnet | `MODAL_APNET` | Modal-dialog åpnet | `tekst` |
| modal lukket | `MODAL_LUKKET` | Modal-dialog lukket | `tekst` |
| navigere | `NAVIGERE` | Bruker klikket på en lenke | `lenketekst`, `destinasjon` |
| skjema åpnet | `SKJEMA_APNET` | Skjema åpnet | `skjemanavn`, `skjemaId` |
| skjema startet | `SKJEMA_STARTET` | Bruker begynte å fylle ut skjema | `skjemanavn`, `skjemaId` |
| skjema spørsmål besvart | `SKJEMA_SPORSMAL_BESVART` | Skjemaspørsmål besvart | `skjemanavn`, `skjemaId`, `spørsmål`, `svar` |
| skjema steg fullført | `SKJEMA_STEG_FULLFORT` | Skjemasteg fullført | `skjemanavn`, `skjemaId`, `steg` |
| skjema validering feilet | `SKJEMA_VALIDERING_FEILET` | Skjemavalidering feilet | `skjemanavn`, `skjemaId` |
| skjema innsending feilet | `SKJEMA_INNSENDING_FEILET` | Skjemainnsending feilet | `skjemanavn`, `skjemaId` |
| skjema fullført | `SKJEMA_FULLFORT` | Skjema fullført | `skjemanavn`, `skjemaId` |
| søk | `SOK` | Bruker utførte et søk | `destinasjon`, `søkeord`, `komponent` |

## Avansert bruk

### Type-sikker hendelseshåndtering

```typescript
import {
  Events,
  type EventName,
  type PropertiesFor,
  isValidEventName
} from '@navikt/analytics-taxonomy';

const analytics = getAnalyticsInstance();

// 1) Streng type-sikkerhet – kun taksonomiens properties
function logTaxonomyEvent<T extends EventName>(
  name: T,
  properties: PropertiesFor<T>
) {
  analytics.logEvent(name, properties);
}

logTaxonomyEvent(Events.NAVIGERE, {
  lenketekst: 'Gå til innsending',
  destinasjon: '/skjema/innsending'
});

// 2) Utvid med egne felter (Record<string, unknown>)
function logTaxonomyEventWithExtra<T extends EventName, Extra extends Record<string, unknown>>(
  name: T,
  properties: PropertiesFor<T> & Extra
) {
  analytics.logEvent(name, properties);
}

logTaxonomyEventWithExtra(Events.SOK, {
  søkeord: 'økonomi',
  destinasjon: '/artikler/sok',
  komponent: 'globalt-søk',
  kilde: 'intern' // Eget ekstra felt
});

// Kjøretidsvalidering
const eventName = getUserInput();
if (isValidEventName(eventName)) {
  console.log('Gyldig hendelse:', eventName);
}
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

1. Opprett en ny fil i `src/events/` med kebab-case-navngivning:
   ```bash
   src/events/mitt-nye-event.ts
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


