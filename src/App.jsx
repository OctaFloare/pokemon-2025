import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
<<<<<<< HEAD
import { PokemonPage } from './pages/pokemon'
import { PokemonsRoute } from './pages/PokemonsRoute'
import { AppRoutes } from './Routes'
import { PokemonContext, usePokemonValue } from './contexts/pokemonContext'
=======
import { Pokemon } from './pages/pokemon'
import { Pokemons } from './pages/pokemons'
import { Navigation } from './componets/navigation';
>>>>>>> 37e9d8d (Remove node_modules and add .gitignore)

function App() {
  const value = usePokemonValue();

<<<<<<< HEAD
  return <PokemonContext.Provider value={value}>
    <AppRoutes />
  </PokemonContext.Provider> 
=======
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/pokemons' element={<Pokemons />} />
    <Route path="/pokemon/:id" element={<Pokemon />} />
  </Routes> 
>>>>>>> 37e9d8d (Remove node_modules and add .gitignore)
}

export default App
