# Cadence

Application Android d'entraînement personnelle : programmes de musculation, poids du corps, circuits guidés à la voix, mobilité et sports, suivi des progrès, du poids, des mensurations, du % de gras, des calories et des repas (avec scan de code-barres via Open Food Facts).

## Structure

| Chemin | Rôle |
| --- | --- |
| `cadence.html` | Toute l'app (HTML, CSS, JS) en un seul fichier. C'est le fichier à modifier. |
| `cadence-app/` | Projet Capacitor 6 qui emballe `cadence.html` en APK Android. |
| `cadence-app/build-www.js` | Copie `cadence.html` vers `www/index.html`. |
| `cadence-app/rebuild.ps1` | Reconstruit l'APK et le copie en `Cadence.apk` à la racine. |

## Construire l'APK

Prérequis : Node.js, JDK 17 et le SDK Android (API 34).

```powershell
cd cadence-app
npm install
powershell -ExecutionPolicy Bypass -File rebuild.ps1
```

L'APK de débogage est copié dans `Cadence.apk` (ignoré par git).

Le fichier `cadence-app/android/local.properties` n'est pas versionné. Crée-le s'il manque, avec le chemin de ton SDK :

```
sdk.dir=C\:\\Users\\<toi>\\AppData\\Local\\Android\\Sdk
```

## Plugins natifs

- `@capacitor-community/text-to-speech` : guidage vocal
- `@capacitor-community/keep-awake` : écran allumé pendant les séances
- `@capacitor-mlkit/barcode-scanning` : scan des codes-barres

## Crédits

- Données nutritionnelles : [Open Food Facts](https://world.openfoodfacts.org) (ODbL).
- Icônes : tracés [Lucide](https://lucide.dev) (ISC).

## Publier une version (Release GitHub)

Le workflow `.github/workflows/release.yml` construit un APK **signé** et le publie dans une Release à chaque tag `v*` :

```powershell
git tag v1.2.0
git push origin v1.2.0
```

L'APK apparaît ensuite dans l'onglet **Releases** du dépôt, prêt à installer.

La clé de signature n'est **jamais** dans git. Elle est fournie par quatre secrets du dépôt (`KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`). Garde une copie de la clé en lieu sûr : sans elle, plus aucune mise à jour ne pourra s'installer par-dessus les versions publiées.
