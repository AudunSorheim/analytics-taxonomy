# NAV Analytics Taxonomy


TypeScript type-definisjoner for standardiserte analytics-hendelser brukt på tvers av NAVs digitale tjenester. Bruk med Umami eller via `getAnalyticsInstance` fra `@navikt/nav-dekoratoren-moduler`.


## Installasjon

```bash
npm install @navikt/analytics-taxonomy
```

## Kom i gang

```typescript
import { Events, type NavigereProperties } from '@navikt/analytics-taxonomy';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance();

// Full type-sikkerhet og autofullføring
analytics.logEvent(Events.NAVIGERE, {
  lenketekst: 'Les mer',
  destinasjon: '/side/info'
});
```

## Tilgjengelige hendelser

| Hendelse | Konstant | Beskrivelse |
|----------|----------|-------------|
| accordion åpnet | `ACCORDION_APNET` | Bruker åpnet en accordion |
| accordion lukket | `ACCORDION_LUKKET` | Bruker lukket en accordion |
| alert vist | `ALERT_VIST` | Varsel/melding vist |
| besøk | `BESOK` | Sidevisning |
| chat startet | `CHAT_STARTET` | Bruker startet en chat-sesjon |
| chat avsluttet | `CHAT_AVSLUTTET` | Bruker avsluttet en chat-sesjon |
| filtervalg | `FILTERVALG` | Bruker anvendte filtre |
| guidepanel vist | `GUIDEPANEL_VIST` | Guidepanel vist |
| last ned | `LAST_NED` | Bruker lastet ned en fil |
| modal åpnet | `MODAL_APNET` | Modal-dialog åpnet |
| modal lukket | `MODAL_LUKKET` | Modal-dialog lukket |
| navigere | `NAVIGERE` | Bruker klikket på en lenke |
| skjema åpnet | `SKJEMA_APNET` | Skjema åpnet |
| skjema startet | `SKJEMA_STARTET` | Bruker begynte å fylle ut skjema |
| skjema spørsmål besvart | `SKJEMA_SPORSMAL_BESVART` | Skjemaspørsmål besvart |
| skjema steg fullført | `SKJEMA_STEG_FULLFORT` | Skjemasteg fullført |
| skjema validering feilet | `SKJEMA_VALIDERING_FEILET` | Skjemavalidering feilet |
| skjema innsending feilet | `SKJEMA_INNSENDING_FEILET` | Skjemainnsending feilet |
| skjema fullført | `SKJEMA_FULLFORT` | Skjema fullført |
| søk | `SOK` | Bruker utførte et søk |

## Avansert bruk

### Type-sikker hendelseshåndtering

```typescript
import {
  Events,
  type TaxonomyEvent,
  type EventName,
  type PropertiesFor,
  isValidEventName
} from '@navikt/analytics-taxonomy';

// Generisk loggingfunksjon med full type-sikkerhet
function logEvent<T extends EventName>(
  name: T,
  properties?: PropertiesFor<T>
) {
  getAnalyticsInstance().logEvent(name, properties);
}

// TypeScript sikrer korrekte properties for hver hendelse
logEvent(Events.NAVIGERE, {
  lenketekst: 'Klikk her',
  destinasjon: '/dokumenter'
});

// Kjøretidsvalidering
const eventName = getUserInput();
if (isValidEventName(eventName)) {
  // eventName er nå typed som EventName
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

Navngivningen følger NAVs [designsystem (Aksel)](https://aksel.nav.no/designsystem) for å spore komponentbruk.

### Legge til nye hendelser

**Før du foreslår en ny hendelse:**
- Vurder: Hvilket problem løser dette?
- Spør: Vil dette hjelpe team å forstå brukeratferd eller måle selvbetjening?
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
2. Oppdater versjon i `package.json`:
   ```bash
   npm version patch  # Bugfikser, dokumentasjon
   npm version minor  # Nye hendelser eller properties (ikke-breaking)
   npm version major  # Breaking changes (fjerne/endre typer)
   ```
3. Push med tags:
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


