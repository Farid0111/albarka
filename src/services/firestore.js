import { db } from '../firebase'

const PRODUCTS_COLLECTION = 'products'
const ORDERS_COLLECTION = 'orders'
const REVIEWS_SUBCOLLECTION = 'reviews'

/**
 * Normalise un produit Firestore pour que l'app ait toujours name, description, etc.
 */
function normalizeProduct(doc) {
  const data = doc.data()
  return {
    id: doc.id,
    ...data,
    name: data.name ?? data.nom ?? 'Sans nom',
    description: data.description ?? data.desc ?? '',
    price: data.price ?? 0,
    emoji: data.emoji ?? '📦',
  }
}

/**
 * Récupère tous les produits depuis Firestore.
 * Uniquement les vraies données du serveur (pas de cache).
 */
export async function getProducts() {
  const snapshot = await db.collection(PRODUCTS_COLLECTION).get({ source: 'server' })
  return snapshot.docs.map(normalizeProduct)
}

/**
 * Enregistre une commande dans Firestore.
 * @param {Object} order - { name, phone, address, items: [{ id, name, emoji, qty, price, subtotal }], total }
 */
export async function addOrder(order) {
  const docRef = await db.collection(ORDERS_COLLECTION).add({
    ...order,
    createdAt: new Date(),
  })
  return docRef.id
}

/**
 * Récupère les URLs des avis clients en images pour un produit (Firebase).
 * Structure Firestore : collection products → sous-collection reviews.
 * Chaque document : url, imageUrl ou image: string[] (liste d’URLs d’images).
 */
export async function getProductReviewImages(productId) {
  if (!productId) return []
  const snapshot = await db
    .collection(PRODUCTS_COLLECTION)
    .doc(String(productId))
    .collection(REVIEWS_SUBCOLLECTION)
    .get()
  const urls = []
  snapshot.docs.forEach((doc) => {
    const data = doc.data()
    const url = data?.url ?? data?.imageUrl ?? data?.image ?? data?.src
    if (url && typeof url === 'string') urls.push(url)
  })
  return urls
}
