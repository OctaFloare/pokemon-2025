import { useState } from "react"
import { Navigation } from "../../componets/navigation"
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) =>{
            setData(response)
        }).catch(error => {
            console.error(error);
        });
    },[])

    console.log(data, "this is pokemons")

    return <div>
        <div>Home Page</div>
    </div>
}