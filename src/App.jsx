import './App.css'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { PokemonPage } from './pages/pokemon'
import { PokemonsRoute } from './pages/PokemonsRoute'
import { AppRoutes } from './Routes'
import { PokemonContext, usePokemonValue } from './contexts/pokemonContext'

function App() {
  const value = usePokemonValue();

  return <PokemonContext.Provider value={value}>
    <AppRoutes />
  </PokemonContext.Provider> 
}

export default App
