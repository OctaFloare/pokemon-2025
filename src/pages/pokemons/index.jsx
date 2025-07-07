<<<<<<< HEAD
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
    console.log(data, "this is data")

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
        <h1 className="mt-10">Pokemons Page</h1>
        {data.results && <PokemonList pokemonList={data.results}/>}
        {!data.results && <div>Loading</div>}
    </div>
=======
import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import { Navigation } from "../../componets/navigation"

export const Pokemons = () => {
  const [data, setData] = useState({});
    useEffect(() => {
      document.title = 'Pokemons page';
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100').then((response) =>{
            setData(response)
        }).catch(error => {
            console.error(error);
        });
    },[])

    console.log(data, "this is pokemons")

  return (
    <div>
      <Navigation/>
      <h1>Pagina de pokemons</h1>
    </div>
  );
>>>>>>> 37e9d8d (Remove node_modules and add .gitignore)
}