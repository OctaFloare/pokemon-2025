import { Moves } from "../moves";

export const PokemonCard = ({ pokemon }) => {
    const { name, weight, sprites, types } = pokemon;

    return <div className="flex gap-2 justify-center">
        <img src={sprites.front_default} alt={name} className="w-[300px] h-[300px]"/>
        <div className="flex flex-col justify-center text-2xl">
            <div>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div>Weight: {weight}</div>
            <div>Type: {types[0].type.name}</div>
            <Moves moves={pokemon.moves} nr={3}/>
        </div>
    </div>
}