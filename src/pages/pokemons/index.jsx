import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "../../componets/navigation";
import { PokemonList } from "../../componets/PokemonList";

export const defaultPage = 1;
export const defaultPerPage = 10;

export const Pokemons = () => {
    const [data, setData] = useState({});
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const perPage = parseInt(searchParams.get("perPage")) || 10;

    useEffect(() => {
        const offset = (currentPage - 1) * perPage;
        async function fetch() {
            try {
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${perPage}`);
                setData(response?.data);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetch();
    }, [currentPage, perPage]);

    return <div>
        <Navigation />
        <div className="flex flex-col mt-15">
            <h1>List of Pokemons:</h1>
        </div>
        {data.results && <PokemonList pokemonList={data.results} />}
        {!data.results && <div>Loading</div>}
    </div>
}