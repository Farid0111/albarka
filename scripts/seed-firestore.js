/**
 * Script pour insérer les produits initiaux dans Firestore.
 * Utilise les vraies données en français depuis src/data/products.js.
 * À exécuter : node scripts/seed-firestore.js
 * Nécessite : npm install firebase
 */

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { PRODUCTS } from '../src/data/products.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCesJawM_d5I8lF9984c42L1_8DnLas8I4',
  authDomain: 'matrixshop-5600a.firebaseapp.com',
  projectId: 'matrixshop-5600a',
  storageBucket: 'matrixshop-5600a.firebasestorage.app',
  messagingSenderId: '390166565853',
  appId: '1:390166565853:web:f272f05b332b251a3c5c34',
  measurementId: 'G-7FXY7JF6SG',
}

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

async function seed() {
  const col = db.collection('products')
  for (const product of PRODUCTS) {
    const { id, ...data } = product
    const docId = String(id)
    await col.doc(docId).set(data)
    console.log('Ajouté:', product.name)
  }
  console.log('Terminé. Produits ajoutés:', PRODUCTS.length, '(descriptions complètes en français)')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
