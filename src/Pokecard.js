
const BASE_POKEMON_URL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
/**
 * Takes in a object with pokemon properties, and constructs a div to display
 * @param {Object} props
 * @returns JSX-HTML for a single pokemon card
 */
function Pokecard(props) {
  return (
    <div className="Pokecard">
      <p>name: {props.name}</p>
      <img src={`${BASE_POKEMON_URL}/${props.id}.png`}/>
      <p>type: {props.type}</p>
    </div>
  )
}
export default Pokecard;