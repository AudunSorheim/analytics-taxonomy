import type {
  ActionMenuInteraksjonsMetode,
  ActionMenuLukkAarsak,
  ActionMenuSti
} from './types';

/**
 * ActionMenu lukket - trigges når menyen kollapser
 */
export const ACTIONMENU_LUKKET_EVENT = 'actionmenu lukket' as const;

export interface ActionMenuLukketProperties {
  /** Id eller annen referanse til menyen */
  komponentId?: string;
  /** Hvordan menyen ble lukket (valg, klikk utenfor, escape, etc.) */
  lukkAarsak?: ActionMenuLukkAarsak;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
  /** Hvilken sti som var aktiv da menyen lukket */
  aktiveSti?: ActionMenuSti;
  /** Id til siste valg som førte til lukking (hvis relevant) */
  sistValgteValgId?: string;
  /** Label på siste valg som førte til lukking (hvis relevant) */
  sistValgteValgTekst?: string;
}

export type ActionMenuLukketEvent = {
  name: typeof ACTIONMENU_LUKKET_EVENT;
  properties?: ActionMenuLukketProperties;
};
