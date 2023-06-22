import './App.css';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';


function App() {

  const [nome, setNome]=useState() //O state está sendo definido no elemento pai e será repassado ao filho

  return (//O elemento getter pegará o elemento já modificado, nesse caso, nome, enquanto o setter irá modificar o estado, portanto pega setNome
    <div className="App">
      <SeuNome setNome={setNome}/> 
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
