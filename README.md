# NAV Analytics Types


Type-definisjoner for analytics-hendelser brukt på tvers av Nav sine digitale tjenester. Logg direkte til Umami, eller via `getAnalyticsInstance` fra `@navikt/nav-dekoratoren-moduler`.

## Installasjon

```bash
npm install @navikt/analytics-types
```

## Kom i gang

```typescript
import { Events, type NavigereProperties } from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance();

const properties: NavigereProperties = {
  lenketekst: 'Les mer',
  destinasjon: '/side/info'
};

analytics.logEvent(Events.NAVIGERE, properties);
```

## Avansert bruk

### Lag din egen log-funksjon med `TaxonomyEvent`

```typescript
import { Events, type TaxonomyEvent } from '@navikt/analytics-types';
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
} from '@navikt/analytics-types';

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

## Tilgjengelige hendelser

Se [src/events](src/events) for en komplett oversikt over alle støttede hendelser og definisjoner.

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
- Gjør properties påkrevde hvis de alltid er tilgjengelige, ellers valgfrie (bruk `?:`)

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
Se [CONTRIBUTING.md](CONTRIBUTING.md) for informasjon om hvordan du publiserer nye versjoner.


NAV bruker en felles analytics-taksonomi for å:
- Sikre datakvalitet og konsistens
- Muliggjøre sammenligninger på tvers av team
- Forenkle implementering av metrikker
- Overholde personvernregler (GDPR, personvernerklæring)

For mer informasjon, se [NAVs personvernerklæring](https://nav.no).

## Lisens

[MIT](LICENSE)


