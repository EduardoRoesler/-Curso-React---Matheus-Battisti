import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Pedro"


  return (
    <div className="App">
      <List/>
      <Frase/>
      <Frase/>
      <SayMyName nome="Eduardo"/>
      <SayMyName nome="Nicole"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Eduardo" idade="25 anos" profissao="Pobre" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
