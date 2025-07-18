import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/pokemonContext";
import axios from "axios";

export const SpeciesCard=()=>{
    const {pokemonSpeciesUrl}= usePokemonContext();
    const [speciesDetails, setSpeciesDetails] = useState()
    useEffect( ()=>{
        console.log(pokemonSpeciesUrl)
        axios.get(pokemonSpeciesUrl).then(res=>{
            setSpeciesDetails(res.data)
        })
    },[pokemonSpeciesUrl])
    return (
        <>
        <div className="flex flex-col justify-center">
            <div>Species Details</div>
            <div>Species Name: {speciesDetails?.name}</div>
            <div>Base Happiness: {speciesDetails?.base_happiness}</div>
            <div>Capture Rate: {speciesDetails?.capture_rate}</div>
        </div>
        </>
    )
}