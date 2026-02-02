/**
 * Vérifie et ajoute des avis clients en images dans Firestore.
 * Structure : products/{productId}/reviews (sous-collection)
 * Chaque document dans reviews a un champ "url" avec l'URL de l'image.
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

const SAMPLE_IMAGE_URLS = [
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3',
]

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

async function checkAndSeed() {
  console.log('🔍 Vérification des produits...')
  const productsSnapshot = await db.collection('products').get()
  console.log(`✅ ${productsSnapshot.docs.length} produits trouvés`)
  
  for (const productDoc of productsSnapshot.docs) {
    const productId = productDoc.id
    console.log(`\n📦 Produit ID: ${productId}`)
    
    const reviewsRef = db.collection('products').doc(productId).collection('reviews')
    const reviewsSnapshot = await reviewsRef.get()
    
    console.log(`   Avis existants: ${reviewsSnapshot.docs.length}`)
    
    if (reviewsSnapshot.docs.length === 0) {
      console.log(`   ➕ Ajout de ${SAMPLE_IMAGE_URLS.length} avis de test...`)
      for (let i = 0; i < SAMPLE_IMAGE_URLS.length; i++) {
        await reviewsRef.add({ url: SAMPLE_IMAGE_URLS[i] })
        console.log(`   ✅ Avis ${i + 1} ajouté`)
      }
    } else {
      console.log('   ℹ️  Avis déjà présents, affichage:')
      reviewsSnapshot.docs.forEach((doc, idx) => {
        const data = doc.data()
        console.log(`      ${idx + 1}. ${data.url || data.imageUrl || data.image || 'Pas d\'URL'}`)
      })
    }
  }
  
  console.log('\n✅ Terminé!')
  process.exit(0)
}

checkAndSeed().catch((err) => {
  console.error('❌ Erreur:', err)
  process.exit(1)
})
