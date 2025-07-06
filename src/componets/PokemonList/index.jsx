import { PokemonCard } from "../PokemonCard"

export const PokemonList = () => {

    return <div className="grid grid-cols-4 gap-4 mt-10">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
    </div>
}