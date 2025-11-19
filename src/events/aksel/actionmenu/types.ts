type StringEnum<T extends string> = T | (string & {});

/**
 * Hvilken interaksjonsmetode som førte til handlingen.
 */
export type ActionMenuInteraksjonsMetode = StringEnum<
  | 'mus'
  | 'tastatur'
  | 'tastatur-snarvei'
  | 'touch'
  | 'programmatisk'
>;

/**
 * Standardiserte årsaker til at en ActionMenu lukkes.
 */
export type ActionMenuLukkAarsak = StringEnum<
  | 'valg'
  | 'klikk-utenfor'
  | 'escape'
  | 'fokus-tapt'
  | 'submeny-lukket'
  | 'programmatisk'
>;

/**
 * Brukes for å beskrive typen av valget.
 */
export type ActionMenuValgType = StringEnum<'item' | 'checkbox' | 'radio' | 'subtrigger'>;

/**
 * Beskriver hierarkiet fra hovedmeny til aktiv (sub)meny.
 * Eksempel: ['Handlinger', 'Status']
 */
export type ActionMenuSti = readonly string[];
