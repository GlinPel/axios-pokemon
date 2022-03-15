import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemons(response.results);
        }).catch(err=>{
            console.log(err);
        });
  }, [])
  
  return (
    <div >
      <h2>Pokemon List</h2>
      <ul>
        {pokemons && pokemons.length > 0 && pokemons.map( pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
