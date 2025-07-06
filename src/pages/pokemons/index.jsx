import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "../../componets/navigation";

export const Pokemons = () => {
    const [data, setData] = useState({});

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
    </div>
}