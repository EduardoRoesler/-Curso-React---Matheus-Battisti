import './App.css';

function App() {
  const name ="Eduardo"
  const newName = name.toUpperCase()
  const url = "https://via.placeholder.com/150"

  function soma(a,b){
    return a+b
  }
          //Observar que no react se utiliza className=""
  return (
    <div className="App"> 
      <h1> Olá, {newName} </h1>
      <p>Soma: 2+2 = {2+2}</p>
      <p>Soma com função: 3+3 = {soma(3,3)}</p>
      <img src={url} alt="Imagem"></img>
    </div>
  );
}

export default App;
