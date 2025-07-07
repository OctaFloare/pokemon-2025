import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { PokemonPage } from './pages/pokemon'
import { PokemonsRoute } from './pages/PokemonsRoute'

export const AppRoutes = () =>  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
    <Route path="/pokemon/:id" element={<PokemonPage />} />
    <Route path='/pokemons' element={<PokemonsRoute />} />
  </Routes> 
