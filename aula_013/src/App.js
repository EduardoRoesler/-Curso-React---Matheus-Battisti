import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']
//const meusItens = []

  return (
    <div className="App">
      <h1>Rendenização de Listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
  );
}

export default App;
