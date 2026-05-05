import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Principal from './pages/Principal'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
import Inicio from './pages/Inicio'
import Detalhes from './pages/Detalhes'
import Contato from './pages/Contato'
import Filme from './pages/Filme'
import Aula15_Login from './components/Aula15_Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/principal" element={<Principal />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Aula15_Login />} />

        {/* ROTAS DINÂMICAS */}
        <Route path="/perfil/:nome" element={<Perfil />} />
        <Route path="/filme/:nome" element={<Filme />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App