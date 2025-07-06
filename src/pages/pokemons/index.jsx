import React from 'react';
import { Navigation } from '../../componets/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Pokemons = () => {
  const [pokemonsList, setData] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1302')
      .then((response) => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(pokemonsList, "this is the pokemons list");

  return (
    <div>
      <Navigation />
      <div className="flex flex-col mt-15">
        <h1>List of Pokemons:</h1>
      </div>
    </div>
  );
}
export { Pokemons }