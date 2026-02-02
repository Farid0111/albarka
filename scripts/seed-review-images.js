/**
 * Insère des avis clients en images (URLs) dans Firestore pour chaque produit.
 * À exécuter une fois : node scripts/seed-review-images.js
 * Les URLs pointent vers des images de test (placeholder). Remplacez par vos vrais URLs plus tard.
 */

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCesJawM_d5I8lF9984c42L1_8DnLas8I4',
  authDomain: 'matrixshop-5600a.firebaseapp.com',
  projectId: 'matrixshop-5600a',
  storageBucket: 'matrixshop-5600a.firebasestorage.app',
  messagingSenderId: '390166565853',
  appId: '1:390166565853:web:f272f05b332b251a3c5c34',
  measurementId: 'G-7FXY7JF6SG',
}

// URLs d'images de test (placeholder) — remplacez par vos vrais URLs Firebase Storage ou autres
const SAMPLE_IMAGE_URLS = [
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3',
]

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

async function seed() {
  const productsCol = db.collection('products')
  for (let productId = 1; productId <= 8; productId++) {
    const reviewsCol = productsCol.doc(String(productId)).collection('reviews')
    for (let i = 0; i < SAMPLE_IMAGE_URLS.length; i++) {
      await reviewsCol.add({ url: SAMPLE_IMAGE_URLS[i] })
    }
    console.log('Avis images ajoutés pour produit', productId)
  }
  console.log('Terminé. Exécutez l’app et ouvrez une page produit pour voir les avis.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
