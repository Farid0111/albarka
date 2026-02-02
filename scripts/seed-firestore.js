/**
 * Script pour insérer les produits initiaux dans Firestore.
 * À exécuter une fois : node scripts/seed-firestore.js
 * Nécessite : npm install firebase
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

const PRODUCTS = [
  { name: 'Thé vert digestion', price: 2500, emoji: '🍵', description: 'Mélange de thé vert et plantes digestives.', longDescription: { intro: 'Thé vert et plantes digestives.', description: 'Accompagne votre digestion en douceur.', ingredients: 'Thé vert, menthe, fenouil, réglisse, anis.', preparation: '250 ml eau frémissante, 5-7 min.', benefits: ['Digestion', 'Ballonnements', 'Antioxydants'], storage: 'À l\'abri de la lumière.', format: '20 sachets — 40 g.' } },
  { name: 'Infusion nuit calme', price: 2200, emoji: '🌙', description: 'Camomille, tilleul et verveine.', longDescription: { intro: 'Plantes pour le sommeil.', description: 'Favorise l\'endormissement.', ingredients: 'Camomille, tilleul, verveine, lavande.', preparation: '8-10 min à couvert.', benefits: ['Détente', 'Sans théine'], storage: 'Sec, à l\'abri de la lumière.', format: '20 sachets — 30 g.' } },
  { name: 'Thé immunité gingembre-citron', price: 2800, emoji: '🍋', description: 'Gingembre, citron, miel.', longDescription: { intro: 'Soutien des défenses.', description: 'Réchauffant et tonifiant.', ingredients: 'Thé noir, gingembre, citron.', preparation: '4-5 min.', benefits: ['Immunité', 'Réchauffant'], storage: 'Sec et à l\'abri de la lumière.', format: '15 sachets — 33 g.' } },
  { name: 'Thé énergie matin', price: 2600, emoji: '☀️', description: 'Thé noir léger et épices.', longDescription: { intro: 'Réveil en douceur.', description: 'Thé et épices digestes.', ingredients: 'Thé noir, gingembre, cannelle.', preparation: '3-4 min, 95 °C.', benefits: ['Énergie', 'Digeste'], storage: 'À l\'abri de la lumière.', format: '25 sachets — 50 g.' } },
  { name: 'Rooibos anti-stress', price: 2400, emoji: '🫖', description: 'Rooibos sans théine.', longDescription: { intro: 'Détente journée.', description: 'Calme sans sédation.', ingredients: 'Rooibos, passiflore, aubépine.', preparation: '5-7 min.', benefits: ['Sans théine', 'Antioxydants'], storage: 'Sec, à l\'abri de la lumière.', format: '20 sachets — 40 g.' } },
  { name: 'Thé détox menthe', price: 2700, emoji: '🌿', description: 'Menthe et thé vert.', longDescription: { intro: 'Purifiant et frais.', description: 'Drainant et rafraîchissant.', ingredients: 'Thé vert, menthe.', preparation: '4-5 min, 85-90 °C.', benefits: ['Fraîcheur', 'Confort digestif'], storage: 'Sec, à l\'abri de l\'humidité.', format: '20 sachets — 40 g.' } },
  { name: 'Infusion ventre léger', price: 2300, emoji: '🍃', description: 'Anis, fenouil, réglisse.', longDescription: { intro: 'Confort digestif.', description: 'Soulage ballonnements.', ingredients: 'Anis, fenouil, réglisse.', preparation: '8-10 min.', benefits: ['Ballonnements', 'Transit'], storage: 'À l\'abri de la lumière.', format: '20 sachets — 30 g.' } },
  { name: 'Thé bien-être curcuma', price: 2900, emoji: '🟡', description: 'Curcuma, poivre, gingembre.', longDescription: { intro: 'Anti-inflammatoire.', description: 'Tonifiant et réchauffant.', ingredients: 'Curcuma, gingembre, poivre.', preparation: '5-6 min.', benefits: ['Curcuma', 'Antioxydant'], storage: 'Sec, à l\'abri de la lumière.', format: '15 sachets — 37,5 g.' } },
]

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

async function seed() {
  const col = db.collection('products')
  for (let i = 0; i < PRODUCTS.length; i++) {
    await col.doc(String(i + 1)).set(PRODUCTS[i])
    console.log('Ajouté:', PRODUCTS[i].name)
  }
  console.log('Terminé. Produits ajoutés:', PRODUCTS.length)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
