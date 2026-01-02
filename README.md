# Dashboard Cuisine Pro

Un dashboard en temps réel pour la gestion des commandes de cuisine avec synthèse vocale en français.

## Fonctionnalités

- Affichage des commandes en temps réel via webhook n8n
- Synthèse vocale automatique des nouvelles commandes
- Interface sombre et moderne
- Informations client (nom, adresse)
- Animations visuelles pour les nouvelles commandes

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5173`

## Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## Déploiement

### Option 1 : GitHub Pages

1. Créez un repository GitHub
2. Poussez le code
3. Activez GitHub Pages dans les paramètres du repository
4. Sélectionnez la branche `main` et le dossier `dist/`

### Option 2 : Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Le déploiement se fera automatiquement

### Option 3 : Netlify

1. Connectez votre repository GitHub à Netlify
2. Configurez le build command: `npm run build`
3. Configurez le publish directory: `dist`

## Configuration

Modifiez l'URL du webhook n8n dans `index.html` :

```javascript
const N8N_URL = 'https://app.n8nproagentvocal.com/webhook/dernier-plat';
```

## Licence

ISC
