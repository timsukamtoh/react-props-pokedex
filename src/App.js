import logo from './logo.svg';
import './App.css';

import Pokedex  from './Pokedex';
/**
 * Constructs Application
 * @returns JSX-HTML div of a pokedex instance
 */
function App() {
  return (
    <div className="App"> Pokedex!
      <Pokedex/>
    </div>
  );
}

export default App;
