import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemonCard";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();


    useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        axios.get(pokemonUrl).then(response => {
            setPokemon(response.data)
            console.log(response.data)
        }) 
    }, [id])

    return (
      <div className="inline-flex flex-col bg-[#2d6db6] border-3 border-yellow-400 shadow-[0_0_5px_#000000] self-center p-5 rounded-md text-yellow-400 mt-18 mb-18">
        {pokemon && <PokemonCard pokemon={pokemon}/>}
        {!pokemon && <div>Pokemon loading...</div>}
      </div>
    )
}