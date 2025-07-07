import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "../../componets/navigation";
import { Pagination } from "../../componets/Pagination";
import { PokemonList } from "../../componets/PokemonList";

export const defaultPage = 1;
export const defaultPerPage = 10;

export const Pokemons = () => {
    const [data, setData] = useState({});
    const [totalNumberOfPokemons, setTotalNumberOfPokemons] = useState(1302);

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
    // console.log(data)
    // console.log(data.results)

    return <div>
        <Navigation />
        <h1 className="mt-10">Pokemons Page</h1>
        <Pagination />
        <PokemonList pokemonList = {data.results}/>
    </div>
}