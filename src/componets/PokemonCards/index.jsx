import { useEffect, useState } from "react";

export const PokemonCards = () => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();
            setPokemonTypes(data.results);
        };

        fetchPokemonTypes();
    }, []);

 return (
  <div>
    <h2>Pokemon Types</h2>
    <div>
      {pokemonTypes.map((type) => (
        <div key={type.name}>
          {type.name}
        </div>
      ))}
    </div>
  </div>
);

};
