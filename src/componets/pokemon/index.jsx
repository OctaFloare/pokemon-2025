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
        }) 
    }, [id])

    return <>
        {pokemon && <PokemonCard pokemon={pokemon}/>}
        {!pokemon && <div>Pokemon loading...</div>}
    </>
}