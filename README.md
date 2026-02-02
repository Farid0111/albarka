# Thés Santé — E-commerce React

Site e-commerce thés et infusions bien-être en **React**, avec **Firebase** (Firestore + Analytics).

## Stack

- **Vite** + **React 18**
- **React Router** (Accueil, Produits, Détail, Panier, Commander)
- **Firebase** : Firestore (produits et commandes réels), Analytics
- **Context** : ProductsContext (produits Firestore), CartContext (panier localStorage)

## Données réelles (Firestore)

- **Produits** : lus depuis la collection Firestore `products`.
- **Commandes** : enregistrées dans la collection Firestore `orders` (nom, téléphone, adresse, articles, total).

### Insérer les produits initiaux

Une fois Firebase configuré (Firestore activé dans la console), exécuter une fois :

```bash
npm run seed
```

Cela ajoute 8 produits de démo dans la collection `products`. Vous pouvez ensuite modifier ou ajouter des produits depuis la [Console Firebase](https://console.firebase.google.com/) (Firestore Database).

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  firebase.js           # config Firebase (App, Analytics, Firestore)
  main.jsx
  App.jsx
  index.css
  context/
    ProductsContext.jsx # produits depuis Firestore
    CartContext.jsx
  services/
    firestore.js        # getProducts(), addOrder()
  components/
  pages/
scripts/
  seed-firestore.js     # script d’import des produits initiaux
```

## Personnalisation

- **Produits** : modifier dans Firestore ou adapter `scripts/seed-firestore.js` puis `npm run seed`.
- **Couleurs** : `src/index.css` (`:root`).
- **Nom du site** : `Header.jsx`, `Footer.jsx`.
# albarka
