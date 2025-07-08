import { PokemonCards } from "../PokemonCards";
export const PokemonCard = ({ pokemon }) => {
    const { name, weight, sprites, types } = pokemon;

    return <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-300 to-amber-500 ">
        <img src={sprites.front_default} alt={name} className="w-[150px] h-[150px]" />
        <div className="flex flex-col justify-center text-black text-lg font-bold">
            <div>Name: {name.toUpperCase()}</div>
            <div>Weight: {weight}</div>
            <div>
                Type:{' '}
                {types.map((t, index) => (
                    <span key={index}>
                        {t.type.name}
                        {index < types.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </div>
        </div>
    </div>
}