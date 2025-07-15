import { PokemonListCard } from "./pokemonListCard"

export const PokemonList = ({pokemonList}) => {
    return <div className="grid grid-cols-4 gap-4 mt-10">
        {pokemonList?.map((pokemon) => 
            <PokemonListCard pokemon={pokemon} key={pokemon.name}/>
        )}
    </div>
}
