import logo from './logo.svg';
import './App.css';

import Pokegame from './Pokegame';
/**
 * Constructs Application
 * @returns JSX-HTML div of a pokedex instance
 */
function App() {
  return (
    <div className="App"> Pokedex!
      <Pokegame />
    </div>
  );
}

export default App;
