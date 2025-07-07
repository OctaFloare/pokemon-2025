import axios from "axios";
import { PokemonCard } from "../PokemonCard"

export const PokemonList = ({pokemonList}) => {  
    
    //console.log(pokemonList);
    
    return <div className="grid grid-cols-4 gap-4 mt-10">
        {
            pokemonList?.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    pokemonName = {pokemon.name}
                    pokemonUrl = {pokemon.url}
                />
            ))
        }
    </div>
}