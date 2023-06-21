//Este arquivo tem a função de inicializar o react no arquivo html


import React from 'react'; //Importa o módulo React da biblioteca 'react'
import ReactDOM from 'react-dom/client'; //Importa o módulo ReactDOM da biblioteca 'react-dom/client'. O ReactDOM é responsável por renderizar os componentes React na DOM.
import './index.css'; //Importa um arquivo CSS chamado 'index.css'
import App from './App'; //Importa o componente App. O componente App será usado para renderizar o aplicativo.
import reportWebVitals from './reportWebVitals'; //Importa uma função chamada reportWebVitals de um arquivo chamado 'reportWebVitals.js'. Essa função é usada para medir o desempenho do aplicativo.

const root = ReactDOM.createRoot(document.getElementById('root')); //Cria uma raiz de renderização usando o método createRoot do ReactDOM. A raiz de renderização é onde o aplicativo React será renderizado.
root.render( //Renderiza o conteúdo do aplicativo na raiz de renderização
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //Chama a função reportWebVitals para medir o desempenho do aplicativo. Isso pode ser usado para enviar métricas de desempenho para uma ferramenta de análise ou registrar resultados no console.
