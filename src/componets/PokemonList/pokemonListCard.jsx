import { Link } from "react-router-dom"
import { usePokemonContext } from "../../contexts/pokemonContext";

export const PokemonListCard = ({ pokemon }) => {
    const urlSplit = pokemon.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    const { setPokemonUrl } = usePokemonContext();

    const onClick = () => {
        setPokemonUrl(pokemon.url)

    }

    return (
        <div className="bg-[#2d6db6] rounded-md text-2xl p-1 border-2 border-yellow-400 shadow-[0_0_5px_#000000]">
            <Link to={`/pokemon/${id}`} className="!text-yellow-400 hover:!text-yellow-300">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
        </div>
    )
}
