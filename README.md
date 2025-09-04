# E-commerce Hexagonal (Node.js + Express)

Cet exemple illustre une **mini-application e-commerce** structurée selon les principes de l’**architecture hexagonale**.  
L’objectif est de montrer comment séparer clairement le **domaine métier**, les **cas d’usage**, les **ports** et les **adapters**.

---

## Objectifs pédagogiques

- Comprendre la logique d’une architecture **hexagonale** :
  - Domaine indépendant des frameworks et de l’infrastructure.
  - Ports définissant des contrats.
  - Adapters implémentant ces contrats (persistence, HTTP, etc.).
- Expérimenter l’**injection de dépendances** entre couches.
- Manipuler deux **sources de données interchangeables** : mémoire et SQLite.

---

## Fonctionnalités

- **Produit** : entité métier (`Product`) avec ses propriétés.
- **Lister les produits** :
  - Cas d’usage `ListProductsUseCase`.
  - Contrat `ProductsRepository` (port).
  - Implémentations :
    - `ProductsRepositoryInMemory` (pour tests/démo).
    - `ProductsRepositorySqlite` (avec base SQLite).
- **API HTTP** :
  - `ProductsController` expose l’use case au monde extérieur.
  - Routes Express (`products.routes.js`).

---

## Structure

- `domain/` : entités métier (indépendantes).
- `application/` : cas d’usage (orchestration du domaine).
- `ports/` : contrats définissant les dépendances externes.
- `adapters/` :
  - `in/` : points d’entrée (HTTP routes).
  - `out/` : implémentations concrètes (SQLite, mémoire).
- `infrastructure/` : composition root (Express app, wiring).
- `scripts/` : utilitaires (ex : reset de la base SQLite).

---

## Configuration

L’application supporte deux sources de données grâce à la variable d’environnement `DATA_SOURCE` :

```bash
# .env
DATA_SOURCE=sqlite   # ou memory
```

- `sqlite` : utilise la base SQLite (fichiers SQL dans `src/adapters/out/persistence/sqlite/`).
- `memory` : utilise une liste de produits en mémoire.

---

## Lancer le projet

1. Installer les dépendances :

   ```bash
   npm install
   ```

2. Dupliquer le fichier `.env-example` et renommer la copie en `.env`

   ```bash
   cp .env-example .env
   ```

3. Préparer la base SQLite (si `DATA_SOURCE=sqlite` dans `.env`) :

   ```bash
   npm run db:reset
   ```

4. Démarrer le serveur :

   ```bash
   npm run dev
   ```

Le serveur écoute par défaut sur le port `3000`.

---

## API

### GET `/products`

Retourne la liste des produits.

Exemple de réponse :

```json
{
  "items": [
    { "id": 1, "name": "Guitare", "price": 199.99 },
    { "id": 2, "name": "Basse", "price": 149.99 }
  ]
}
```

---

## Points clés

- **Indépendance du domaine :** `Product` et `ListProductsUseCase` ne connaissent pas l’infra.

- **Ports et adapters :** `ProductsRepository` est un contrat, `SQLite` et `Memory` sont des implémentations interchangeables.

- **Injection :** le choix de l’adapter se fait dans `infrastructure/app.js`.

- **Testabilité :** facile de tester en branchant `ProductsRepositoryInMemory`.

---

## Prochaines étapes possibles

- Ajouter d’autres cas d’usage (ex : `AddProductUseCase`).

- Brancher une API REST plus complète (CRUD).

- Illustrer l’injection via un **conteneur DI**.

- Déployer un exemple SQLite en production et Memory pour les tests unitaires.
