import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Pokemon } from './pages/pokemon'

function App() {

  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
    <Route path="/pokemon/:id" element={<Pokemon />} />
  </Routes> 
}

export default App
