import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if(search !== false){
      fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemons(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }
  }, [search])
  
  return (
    <div>
      <button onClick={() => setSearch(true)}>Fetch Pokemons</button>
      <ul>
        {pokemons && pokemons.length > 0 && pokemons.map( pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
