import Pokecard from "./Pokecard";
/**
 * Takes in a list of pokemon props.pokemon and constructs JSX-HTML
 * @param {Object} props
 * @returns A <ul> pokemon cards
 */
function Pokedex({ pokemon = [], handTotal = 0, isWinner }) {
  return (
    <div>
      <ul className="Pokedex">
        {pokemon.map((p) => {
          return (
            <li>
              <Pokecard name={p.name} type={p.type} id={p.id} />
            </li>
          );
        })}
      </ul>
      <p>Total XP: {handTotal}</p>
      {isWinner && <p>THIS HAND WINS!</p>}
    </div>
  );
}

export default Pokedex;
