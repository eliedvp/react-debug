# Debug React avec React Developer Tools

## Objectif
Déboguer une application React simple avec deux composants principaux : `Counter` et `UserProfile`.  
Identifier et corriger les problèmes liés au state, aux props et aux composants non sécurisés.  
Vérifier le fonctionnement via React Developer Tools.

## Problèmes identifiés initialement
1. **State `user` à `null`**
   - `UserProfile` essayait d’accéder à `user.name` et `user.email`, ce qui provoquait une erreur.
2. **Incrément du compteur avec une valeur string**
   - `count` devient une string au lieu d’un number.
3. **HTML invalide dans `<h1>`**
   - Contient un `<ul>` qui n’est pas valide.
4. **React Developer Tools n’affichait pas l’arbre**
   - Message : `Loading React Element Tree...`

## Solutions mises en œuvre

### 1. Sécurisation de `UserProfile`
```javascript
function UserProfile({ user }) {
  if (!user) return <p className="user-profile">Aucun utilisateur trouvé.</p>;
  return (
    <div className="user-profile">
      <h2>Nom : {user.name}</h2>
      <p>Email : {user.email}</p>
    </div>
  );
}
