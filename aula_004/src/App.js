import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name ="Eduardo"
  const newName = name.toUpperCase()
  const url = "https://via.placeholder.com/150"

  function soma(a,b){
    return a+b
  }
          //Observar que no react se utiliza className=""
          //A inserção do componente é feita introduzindo-o em uma tag
  return (
    <div className="App"> 
      <h1> Olá, {newName} </h1>
      <p>Soma: 2+2 = {2+2}</p>
      <p>Soma com função: 3+3 = {soma(3,3)}</p>
      <img src={url} alt="Imagem"></img>
      <HelloWorld/>
    </div>
  );
}

export default App;
