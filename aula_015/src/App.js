import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' //Importação necessária para usar o Router
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {

  return (//A tag router vai envolver toda a página
  //A tag link é como se fosse uma tag <a> do html, mas é o componente correto para fazer o roteamento por debaixo dos panos e dar cara de SPA para o projeto
  //A tag switch é usada para declarar as rotas
  //Quando for rotear e encontrar uma /, o router irá para home, mesmo que tenha algo apos a barra. Para que ele só vá para home quando for somente a barra, usa-se o exact
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
    <Footer />
  </Router>
);
}

export default App;
