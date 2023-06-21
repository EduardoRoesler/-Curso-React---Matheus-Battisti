function Form () {
    function cadastrarUsuario (events){ //pode ser abreviado como e
        events.preventDefault() //Isso evita o comportamento padrão do js que é o envio do form para o destino do atributo action e atualização da página
        const nome = window.document.getElementById('nome').value
        console.log(`Usuário ${nome} cadastrado`)
    }


    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}> 
                <div>
                    <input type="text" placeholder="Digite seu nome" id="nome"></input>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>
        </div>


    )
}

export default Form