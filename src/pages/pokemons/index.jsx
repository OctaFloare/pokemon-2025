import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "../../componets/navigation";
import { PokemonCard } from "../../componets/PokemonCard";
import { PokemonList } from "../../componets/PokemonList";
import { Pagination } from "../../componets/Pagination";

export const Pokemons = () => {
    const [data, setData] = useState({});
    const [perPage, setBooksPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [toatalPokemons, setTotalBooks] = useState(0);

    useEffect(() => {
        async function fetch() {
            try {
                let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1302'); 
                setData(response?.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        
        fetch();
    }, []);
    console.log(data)

    return <div>
        <Navigation />
        <h1 className="mt-10">Pokemons Page</h1>
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(toatalPokemons / perPage)}
            totalItems={toatalPokemons}
            itemsPerPage={perPage}
            onPageChange={setCurrentPage}
          />
        <PokemonList />
    </div>
}