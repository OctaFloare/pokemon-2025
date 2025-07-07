import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Pokemon } from './pages/pokemon'
import { Pokemons } from './pages/pokemons'
import { PokemonsRoute } from './pages/PokemonsRoute'

function App() {

  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
    {/* <Route path="/pokemon/:id" element={<Pokemon />} /> */}
    <Route path='/pokemons' element={<PokemonsRoute />} />

  </Routes> 
}

export default App
