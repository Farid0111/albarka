const REVIEWS_KEY = 'albarka_reviews';

/* Avis fictifs avec étoiles — affichés pour chaque produit */
const FAKE_REVIEWS = {
  1: [
    { id: 'f1', author: 'Marie K.', rating: 5, comment: 'Très efficace pour la digestion. J\'en prends après chaque repas copieux.', date: '2024-11-15T10:00:00.000Z' },
    { id: 'f2', author: 'Paul D.', rating: 4, comment: 'Bon goût et effet apaisant. Je recommande.', date: '2024-10-22T14:30:00.000Z' },
    { id: 'f3', author: 'Sophie L.', rating: 5, comment: 'Mon thé digestion préféré. Livraison rapide.', date: '2024-12-01T09:00:00.000Z' },
  ],
  2: [
    { id: 'f4', author: 'Jean M.', rating: 5, comment: 'Je dors beaucoup mieux depuis que je bois cette infusion le soir.', date: '2024-11-28T20:00:00.000Z' },
    { id: 'f5', author: 'Claire B.', rating: 4, comment: 'Parfum doux, effet relaxant. Parfait avant le coucher.', date: '2024-10-10T18:00:00.000Z' },
  ],
  3: [
    { id: 'f6', author: 'Thomas R.', rating: 5, comment: 'Idéal en hiver. Le gingembre-citron réchauffe et booste.', date: '2024-12-05T08:00:00.000Z' },
    { id: 'f7', author: 'Nathalie F.', rating: 5, comment: 'Excellent pour les petits maux de gorge. J\'adore.', date: '2024-11-20T11:00:00.000Z' },
  ],
  4: [
    { id: 'f8', author: 'David T.', rating: 4, comment: 'Bon réveil sans café. Pas trop fort, parfait pour moi.', date: '2024-11-12T07:00:00.000Z' },
    { id: 'f9', author: 'Isabelle C.', rating: 5, comment: 'Mon thé du matin depuis des mois. Qualité au top.', date: '2024-10-30T08:30:00.000Z' },
  ],
  5: [
    { id: 'f10', author: 'Pierre G.', rating: 5, comment: 'Sans théine = je peux en boire toute la journée. Très relaxant.', date: '2024-11-25T15:00:00.000Z' },
    { id: 'f11', author: 'Émilie V.', rating: 4, comment: 'Goût doux, effet anti-stress noticeable. Content de mon achat.', date: '2024-11-08T16:00:00.000Z' },
  ],
  6: [
    { id: 'f12', author: 'Lucie H.', rating: 5, comment: 'Menthe fraîche et détox efficace. Je me sens plus légère.', date: '2024-12-02T12:00:00.000Z' },
    { id: 'f13', author: 'Marc S.', rating: 4, comment: 'Bon produit après les fêtes. Livraison soignée.', date: '2024-11-18T14:00:00.000Z' },
  ],
  7: [
    { id: 'f14', author: 'Céline P.', rating: 5, comment: 'Finis les ballonnements. Cette infusion fait vraiment du bien.', date: '2024-11-22T19:00:00.000Z' },
    { id: 'f15', author: 'Olivier N.', rating: 4, comment: 'Goût anis agréable. Efficace pour le ventre.', date: '2024-10-25T10:00:00.000Z' },
  ],
  8: [
    { id: 'f16', author: 'Anne W.', rating: 5, comment: 'Curcuma et gingembre : un must pour l\'immunité. Très satisfaite.', date: '2024-12-01T09:00:00.000Z' },
    { id: 'f17', author: 'Philippe L.', rating: 5, comment: 'Anti-inflammatoire naturel, je le recommande à tous.', date: '2024-11-15T11:00:00.000Z' },
  ],
};

export function getReviews(productId) {
  const fake = FAKE_REVIEWS[productId] || [];
  try {
    const data = localStorage.getItem(REVIEWS_KEY);
    const all = data ? JSON.parse(data) : {};
    const user = all[productId] || [];
    return [...fake, ...user];
  } catch {
    return fake;
  }
}

export function addReview(productId, review) {
  const data = localStorage.getItem(REVIEWS_KEY);
  const all = data ? JSON.parse(data) : {};
  const list = all[productId] || [];
  const newReview = {
    id: Date.now(),
    author: review.author.trim(),
    rating: Math.min(5, Math.max(1, Number(review.rating) || 5)),
    comment: (review.comment || '').trim(),
    date: new Date().toISOString(),
  };
  list.push(newReview);
  all[productId] = list;
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
  return newReview;
}

export function formatReviewDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
