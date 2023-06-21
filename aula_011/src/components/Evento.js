function Evento ({numero}){ //A propriedade está sendo esperada no componente de evento

    function funçãoEvento () {
        console.log(`botão número ${numero} ativado`)
    }

    return(
        <div>
            <p> Clique em mim </p>
            <button onClick={funçãoEvento}>Ativar!</button>
        </div>
    )
}

export default Evento