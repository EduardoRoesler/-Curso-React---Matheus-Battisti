import Frase from "./Frase"

function HelloWorld(){ //O componente nada mais é do que uma função que dá return a um jsx
    return( 
        <div>
            <Frase/> 
            <h1>Meu primeiro componente</h1>
            <Frase/>
        </div>
    )//Posso importar os componentes em outros componentes, bem como utilizá-los em diversos lugares
}

export default HelloWorld //Export leva o nome do próprio componente