import axios from "axios";
import { useEffect, useState } from "react"

export const PokemonCard = ({ pokemonName, pokemonUrl }) => {
    const [numberOfMoves, setNumberOfMoves] = useState(0);

    // console.log(pokemonName);
    // console.log(pokemonUrl);

    useEffect(() => {
        async function fetchInfo(params) {
            try {
                let response = await axios.get(`${pokemonUrl}`);
                // console.log(response.data.moves.length);
                setNumberOfMoves(response.data.moves.length);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchInfo();
    }, []);

    return <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {pokemonName}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Number of moves: {numberOfMoves}
        </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span className="text-white">
                More info
            </span>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>

    </div>
}