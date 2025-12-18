# Contributing to Analytics Types

## Om taksonomien

Denne taksonomien sikrer konsistent analytics på tvers av NAVs applikasjoner ved å:

- **Standardisere hendelsenavn** - Følger naturlige språkkonvensjoner (f.eks. "skjema åpnet")
- **Type-sikkerhet** - Forhindrer skrivefeil og sikrer korrekte properties
- **Gjenbrukbarhet** - Team kan dele hendelsesdefinisjoner på tvers av tjenester
- **Personvernoverensstemmelse** - Kun godkjente, ikke-sensitive properties

Navngivningen følger Nav sitt [designsystem (Aksel)](https://aksel.nav.no/designsystem) for å spore komponentbruk.

## Utvikling

```bash
# Installer avhengigheter
npm install

# Kjør tester
npm test

# Bygg
npm run build
```

## Legge til nye hendelser

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

## Publishing to GitHub Packages

This project uses a manual publishing workflow to GitHub Packages.

### Prerequisites

1.  **Authenticate with GitHub Packages** (One-time setup)
    *   If you haven't already, you need to authenticate with GitHub Packages.
    *   Create a Personal Access Token (PAT) on GitHub with `write:packages`, `read:packages`, and `repo` scopes.
    *   Login to npm using your GitHub credentials:
        ```bash
        npm login --scope=@navikt --registry=https://npm.pkg.github.com
        ```
        *   **Username:** Your GitHub username
        *   **Password:** Your Personal Access Token (PAT)
        *   **Email:** Your public email address
    *   **Note:** If you have already configured your `~/.npmrc` with an auth token for `//npm.pkg.github.com/`, you can skip this step.

### Release Process

1.  **Prepare the Workspace**
    *   Ensure you are on the `main` branch and have the latest changes:
        ```bash
        git checkout main
        git pull origin main
        ```
    *   Make sure your working directory is clean.

2.  **Update Changelog**
    *   Update `CHANGELOG.md` with a summary of the changes in this release.
    *   Commit the changelog changes:
        ```bash
        git add CHANGELOG.md
        git commit -m "docs: Update changelog"
        ```

3.  **Bump Version**
    *   Run the `npm version` command to update `package.json`, create a git tag, and commit the change.
    *   Choose the appropriate semantic version bump:
        *   **Patch** (Bug fixes):
            ```bash
            npm version patch
            ```
        *   **Minor** (New features, backwards compatible):
            ```bash
            npm version minor
            ```
        *   **Major** (Breaking changes):
            ```bash
            npm version major
            ```

4.  **Verify Build**
    *   Ensure everything builds and tests pass before publishing:
        ```bash
        npm run test
        npm run build
        ```
    *   *(Note: `npm publish` will also run `prepublishOnly` which executes these checks, but it's good to verify manually first)*

5.  **Publish**
    *   Publish the package to the GitHub Registry:
        ```bash
        npm publish --registry=https://npm.pkg.github.com/
        ```

6.  **Push Changes**
    *   Push the new commits and tags to GitHub:
        ```bash
        git push && git push --tags
        ```
