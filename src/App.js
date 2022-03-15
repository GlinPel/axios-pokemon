import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if(search !== false){
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response=>{
        setPokemons(response.data.results)
      })
    }
  }, [search])
  
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary" onClick={() => setSearch(true) }>Fetch Pokemons</button>
      <ul className="list-group mt-3">
        {pokemons && pokemons.length > 0 && pokemons.map( pokemon => (
          <li className="list-group-item" key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
