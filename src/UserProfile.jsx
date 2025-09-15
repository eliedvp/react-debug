// Composant UserProfile
function UserProfile({ user }) {
  // BUG initial : si user = null, plantage en accédant à user.name ou user.email
  // Correction : vérifier si user existe avant d'afficher
  if (!user) return <p className="user-profile">Aucun utilisateur trouvé.</p>;

  return (
    <div className="user-profile">
      <h2>Nom : {user.name}</h2>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default UserProfile;
