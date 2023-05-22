import Pokecard from "./Pokecard";

const DEFAULT_POKEMON = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]
/**
 * Takes in a list of pokemon props.pokemon and constructs JSX-HTML
 * @param {Object} props
 * @returns A <ul> pokemon cards
 */
function Pokedex({ pokemon=DEFAULT_POKEMON }) {
  return (
    <ul className="Pokedex">
      {pokemon.map(p => {
        return (<li><Pokecard name={p.name} type={p.type} id={p.id} /></li>);
      })}
    </ul>
  );
}

export default Pokedex;