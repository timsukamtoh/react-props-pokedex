import { chooseN } from "./helpers/choice";
import Pokedex from "./Pokedex";

let DEFAULT_POKEMON = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

function Pokegame({ pokemon = DEFAULT_POKEMON }) {
  console.log("before pokemon=", pokemon);
  const hand1 = chooseN(pokemon, 4);
  console.log("hand1=", hand1[0]);
  const hand2 = pokemon;
  console.log("hand2=", hand2[0]);
  console.log("after pokemon=", pokemon);

  const hand1Total = hand1.reduce(
    (sum, pokemon) => sum + pokemon.base_experience,
    0
  );
  const hand2Total = hand2.reduce(
    (sum, pokemon) => sum + pokemon.base_experience,
    0
  );

  return (
    <div>
      <Pokedex
        pokemon={hand1}
        handTotal={hand1Total}
        isWinner={hand1Total > hand2Total}
      />
      <Pokedex
        pokemon={hand2}
        handTotal={hand2Total}
        isWinner={hand2Total > hand1Total}
      />
    </div>
  );
}

export default Pokegame;
export { DEFAULT_POKEMON };
