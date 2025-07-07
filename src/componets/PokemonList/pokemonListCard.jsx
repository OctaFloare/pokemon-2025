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
        <>
            <Link to={`/pokemon/${id}`}>{pokemon.name}</Link>
        </>
    )
}