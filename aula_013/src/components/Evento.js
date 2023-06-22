import Button from "./evento/Button"

function Evento (){ //A propriedade está sendo esperada no componente de evento

    function primeiroEvento () {
        console.log(`Primeiro evento ativado`)
    }

    function segundoEvento(){
        console.log(`Segundo evento ativado`)
    }

    return( //Nessas funções que são passadas dentro dos componentes, não posso abrir (), caso abrir, ele considerará que a função está sendo declarada dentro do componente
        <div>
            <p> Clique em mim </p>
            <Button event={primeiroEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento