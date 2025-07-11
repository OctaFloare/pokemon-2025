import { SpeciesCard } from "../species";
import { PokemonAbilites } from "./pokemonAbilities";

import { Moves } from "./pokemonMoves";

export const PokemonCard = ({ pokemon }) => {
    const { name, weight, sprites, types, forms, game_indices, abilities } = pokemon;

    return <div className="flex flex-col gap-2 justify-center">
        <img src={sprites.front_default} alt={name} className="w-[300px] h-[300px] flex self-center"/>
        <div className="flex flex-col justify-center text-2xl">
            <div>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div>Weight: {weight}</div>
            <div>Type: {types[0].type.name}</div>
            <PokemonAbilites abilities={abilities} />
            <Moves moves={pokemon.moves} nr={3}/>
            <div>Form: {forms[0].name}</div>
            <SpeciesCard/>
        </div>
    </div>
}