// Composant Counter
function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <p>Valeur actuelle : {count}</p>

      {/* BUG initial : setCount("1") faisait passer count en string */}
      {/* Correction : utiliser count + 1 pour garder le type number */}
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}

export default Counter;
