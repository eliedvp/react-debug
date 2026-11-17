# Debug React avec React Developer Tools

Exercice réalisé pendant la formation GoMyCode.

## Objectif
Déboguer une application React simple avec deux composants principaux : `Counter` et `UserProfile`.
Identifier et corriger les problèmes liés au state, aux props et aux composants non sécurisés.
Vérifier le fonctionnement via React Developer Tools.

## Problèmes identifiés initialement

1. **State `user` à `null`** : `UserProfile` essayait d'accéder à `user.name` et `user.email`, ce qui provoquait une erreur.
2. **Incrément du compteur avec une valeur string** : `count` devenait une string au lieu d'un number.
3. **HTML invalide dans `<h1>`** : il contenait un `<ul>`, ce qui n'est pas valide.
4. **React Developer Tools n'affichait pas l'arbre** : message `Loading React Element Tree...`

## Solutions mises en œuvre

- Le composant `UserProfile` vérifie que `user` existe avant d'afficher ses informations, ce qui évite les erreurs lorsque `user` est `null`.
- L'incrémentation du compteur ajoute `1` au nombre existant (`count + 1`), garantissant que `count` reste un `number`.
- Le `<ul>` dans le `<h1>` a été remplacé par un `<span>` pour obtenir un HTML valide.
- L'application est servie via le serveur de développement : React Developer Tools affiche alors correctement l'arbre des composants, leurs props et leur state.

## Vérification finale

- `Counter` incrémente correctement et affiche un nombre.
- `UserProfile` affiche les informations de l'utilisateur, ou un message alternatif si `user` est `null`.
- L'arbre des composants est visible et interactif dans React Developer Tools.

## Stack

- React 19 (composants fonctionnels, `useState`)
- Create React App (`react-scripts` 5)
- Extension navigateur React Developer Tools

## Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur http://localhost:3000 ; ouvrir ensuite l'onglet « Components » de React Developer Tools.

## Conclusion

Tous les bugs identifiés ont été corrigés. L'application est stable et sert de support pédagogique pour le débogage avec React Developer Tools.
