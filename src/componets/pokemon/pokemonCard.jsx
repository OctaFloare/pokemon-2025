<<<<<<< HEAD
<<<<<<< HEAD
import { PokemonAbilites } from "./pokemonAbilities";
=======
=======
import { PokemonAbilites } from "./pokemonAbilities";
>>>>>>> e6251e1 (Fixed conflicts)
import { PokemonStats } from "./pokemonStats";
import { Moves } from "./pokemonMoves";
export const PokemonCard = ({ pokemon }) => {
<<<<<<< HEAD
      console.log("Pokemon data in PokemonCard:", pokemon);
    const { name, weight, sprites, types } = pokemon;
>>>>>>> 4b98125 (Commit)

import { Moves } from "./pokemonMoves";

export const PokemonCard = ({ pokemon }) => {
    const { name, weight, sprites, types, forms, game_indices, abilities } = pokemon;

=======
       const { name, weight, sprites, types, forms, game_indices, abilities } = pokemon;

>>>>>>> e6251e1 (Fixed conflicts)
    return <div className="flex flex-col gap-2 justify-center">
        <img src={sprites.front_default} alt={name} className="w-[300px] h-[300px] flex self-center"/>
        <div className="flex flex-col justify-center text-2xl">
            <div>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div>Weight: {weight}</div>
            <div>Type: {types[0].type.name}</div>
<<<<<<< HEAD
<<<<<<< HEAD
            <PokemonAbilites abilities={abilities} />
            <Moves moves={pokemon.moves} nr={3}/>
            <div>Form: {forms[0].name}</div>
=======
            <PokemonStats pokemon={pokemon} />
>>>>>>> 4b98125 (Commit)
=======
             <div>Form: {forms[0].name}</div>
              <PokemonAbilites abilities={abilities} />
            <Moves moves={pokemon.moves} nr={3}/>
                <PokemonStats pokemon={pokemon} />
>>>>>>> e6251e1 (Fixed conflicts)
        </div>
    </div>
}