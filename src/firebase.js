import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics'
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

const app = firebase.initializeApp(firebaseConfig)
const analytics = typeof window !== 'undefined' ? firebase.analytics(app) : null
const db = firebase.firestore()

export { app, analytics, db, firebase }
