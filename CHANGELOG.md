# Endringslogg

Hold denne filen oppdatert for hver utgivelse. Samle endringer per versjon og beskriv dem kort.

## Neste versjon

- Nytt: Taksonomien er skrevet om til rene TypeScript-typer for gjenbruk i NAVs løsninger.
- Dokumentasjon: README er oversatt til norsk og utvidet med type-sikre eksempler.
- Vedlikehold: Lisensen er justert til MIT og npm-oppsettet er ryddet.
- Bygg: Pakken distribueres nå kun som ESM; CommonJS-utgaven er fjernet.
- Endring: `besøk`-hendelsen støtter nå `url` og `sidetittel` som properties.
- Nytt: Lagt til komplette hendelser for Aksel-komponenter.
- Nytt: Aksel-dekning utvidet med ActionMenu, Pagination, Radio, ToggleGroup, Switch og Stepper-hendelser.
- Nytt: ActionMenu har fått rikere felter og egne hendelser for åpne/lukke av undermenyer.
- Nytt: Flere komponenter har nå typer (HelpText, Tooltip, Popover, LinkCard, Tag, Textarea, Table) samt MonthPicker-variant.
- Nytt: Lagt til ErrorSummary (vist, feilmelding klikket), FormProgress (steg vist/klikket), FormSummary (vist, felt redigert) og Link (klikket).
- Nytt: Table utvidet med `filter anvendt` og `rad utvidet` for filtrering og utvidbare rader.
- Forbedring: Search-hendelsen har nå `harResultater`, `sokefrase`, `sortering`, `aktiveFiltre` og `responstidMs` for bedre søkeanalyse.
- Forbedring: Modal `lukkMetode` er nå strengt typet enum (`escape`, `klikk-utenfor`, `lukk-knapp`, `handlings-knapp`, `programmatisk`), pluss `varighetMs` og `harEndringer`.
- Forbedring: Tabs `fane byttet` har fått `navigasjonsMetode` (click/keyboard/programmatic) og `antallFaner`, samt `selectionFollowsFocus`.
- Forbedring: Stepper `steg endret` har nå `retning` (fremover/bakover), `totaltAntallSteg` og `forrigeStegFullfort`.
- Forbedring: Pagination `side valgt` har fått `navigasjonsType` (neste/forrige/første/siste/direkte), `harNeste` og `harForrige`.
- Forbedring: Tooltip forenklet - fjernet overengineered `aarsak`, `triggerId` og `lukkMetode`. Beholder bare `tekst` og `komponentId`.
- Forbedring: ToggleGroup endret fra `valg endret` til `valgt`, fjernet `forrigeToggle` og `modus` (støtter kun single-select).
- Dokumentasjon: Flyttet GuidePanel til Aksel-seksjonen og dokumentert de nye komponentene.
- Kvalitet: Jest-test sikrer at alle filer under `src/events/` eksporteres fra `src/index.ts`.
- Endring: Accordion, modal og søk følger nå samme felter som i Aksel-taksonomien.
- Breaking: Fjernet Chat events - komponenten er kun statisk visning, ikke interaktiv.
- Breaking: Fjernet Dropdown events - deprecated komponent erstattet av ActionMenu.
- Breaking: Fjernet ConfirmationPanel events - deprecated komponent.
- Breaking: Alert `alertType` og `alertVariant` erstattet med `variant` enum ('error' | 'warning' | 'info' | 'success').
- Breaking: Button `knappType` og `knappVariant` erstattet med `variant` enum og `size`.
- Breaking: Checkbox endret fra `avkrysningsboks valgt` til `avkrysningsboks endret`, tracker nå `checked` boolean.
- Breaking: Chips `chip valgt` endret til `chip toggled` for Chips.Toggle, tracker nå `selected` state og `variant`.
- Breaking: Combobox `valg endret` endret til `option toggled` for multi-select støtte med `isSelected`, `isCustomOption`, `isMultiSelect`.
- Breaking: DatePicker utvidet med `mode`, `from`, `to` for å støtte single/multiple/range valg.
- Breaking: HelpText `triggerId` og `variant` fjernet, erstattet med `placement` og `tekst`.
- Breaking: Tabs `faneId` endret til `tabsId`, `tekst` fjernet, `tilFaneTekst` lagt til for klarhet.

