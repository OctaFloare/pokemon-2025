import { PokemonStats } from "./pokemonStats";
export const PokemonCard = ({ pokemon }) => {
      console.log("Pokemon data in PokemonCard:", pokemon);
    const { name, weight, sprites, types } = pokemon;

    return <div className="flex gap-2 justify-center">
        <img src={sprites.front_default} alt={name} className="w-[200px] h-[200px]"/>
        <div className="flex flex-col justify-center">
            <div>Name: {name}</div>
            <div>Weight: {weight}</div>
            <div>Type: {types[0].type.name}</div>
            <PokemonStats pokemon={pokemon} />
        </div>
    </div>
}