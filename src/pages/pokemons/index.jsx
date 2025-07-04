import React from 'react';
import { Navigation } from '../../componets/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Pokemons = () => {
  const [pokemonsList, setData] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then((response) => {
        setData(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(pokemonsList, "this is the pokemons list");

  return (
    <div>
      <Navigation />
      <h1>Pokemons</h1>
      <p>List of Pokemons will be displayed here.</p>
    </div>
  );
}
export { Pokemons }