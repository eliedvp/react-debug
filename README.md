# Debug React avec React Developer Tools

## Objectif
Déboguer une application React simple avec deux composants principaux : `Counter` et `UserProfile`.  
Identifier et corriger les problèmes liés au state, aux props et aux composants non sécurisés.  
Vérifier le fonctionnement via React Developer Tools.

---

## Problèmes identifiés initialement

1. **State `user` à `null`**  
   - `UserProfile` essayait d’accéder à `user.name` et `user.email`, ce qui provoquait une erreur.

2. **Incrément du compteur avec une valeur string**  
   - `count` devient une string au lieu d’un number.

3. **HTML invalide dans `<h1>`**  
   - Contient un `<ul>` qui n’est pas valide.

4. **React Developer Tools n’affichait pas l’arbre**  
   - Message : `Loading React Element Tree...`

---

## Solutions mises en œuvre

- Le composant `UserProfile` a été sécurisé pour vérifier si `user` existe avant d’afficher ses informations, évitant ainsi les erreurs lorsque `user` est `null`.  
- L’incrémentation du compteur a été corrigée pour ajouter `1` au nombre existant, garantissant que `count` reste un nombre (`number`) et non une string.  
- Le `<ul>` dans le `<h1>` a été remplacé par un `<span>` pour avoir un HTML valide.  
- L’application est servie via un serveur de développement et React Developer Tools peut maintenant afficher correctement l’arbre des composants, leurs props et states.

---

## Vérification finale

- `Counter` incrémente correctement et affiche un nombre.  
- `UserProfile` affiche les informations de l’utilisateur ou un message alternatif si `user` est `null`.  
- L’arbre des composants est visible et interactif dans React Developer Tools.  

---

## Conclusion

Tous les bugs identifiés ont été corrigés. L’application est stable et prête pour un usage pédagogique ou pour le débogage avancé avec React Developer Tools.
