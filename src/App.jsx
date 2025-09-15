import { useState } from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";
import "./App.css";

function App() {
  // BUG initial : count = 0 est correct, mais dans Counter il était modifié avec une string
  const [count, setCount] = useState(0);

  // BUG initial : user = null provoquait une erreur dans UserProfile
  // Correction : on met une valeur par défaut pour éviter les erreurs
  const [user, setUser] = useState({
    name: "Elie",
    email: "elie@gmail.com"
  });

  return (
    <div className="app">
      {/* BUG initial : <ul> dans <h1> n'est pas valide */}
      {/* Correction : remplacé par <span> */}
      <h1>
        Debug React avec <span>React Developer Tools</span>
      </h1>

      {/* Counter reçoit count et setCount */}
      {/* BUG initial dans Counter : on appelait setCount("1") au lieu de count+1 */}
      <Counter count={count} setCount={setCount} />

      {/* UserProfile reçoit user */}
      {/* BUG initial : si user = null, UserProfile plantait */}
      <UserProfile user={user} />
    </div>
  );
}

export default App;
