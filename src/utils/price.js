/** +3000 FCFA pour le prix barré : prix barré = prix base + 3000, prix affiché (promo) = prix base */
export const STRIKETHROUGH_ADD_FCFA = 3000

/** Prix barré (élevé) = prix en base + 3000 */
export function getStrikethroughPrice(price) {
  if (price == null || typeof price !== 'number') return 0
  return price + STRIKETHROUGH_ADD_FCFA
}
