import { useState } from 'react' //importa useState do pacote react

function Form() {
    function cadastrarUsuario(events) { //pode ser abreviado como e
        events.preventDefault() //Isso evita o comportamento padrão do js que é o envio do form para o destino do atributo action e atualização da página
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState() //Usamos o hook useState para criar uma variável de estado chamada name e a função setName para atualizar o valor do estado. O valor inicial do estado é indefinido (undefined). Casp eu insira o valor inicial, posso usar o atributo value no campo, e quando a pagina for atualizada, o valor ja vai preencher o campo. Isso pode ser usado para areas onde o usuário irá alterar dados de cadastro
    //Na constante acima, o primeiro atributo é o que será lido, o segundo o que será alterado
    const [password, setPassword] = useState()

    return ( //no react não se utiliza o for em label, mas sim o htmlFor
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)} //Quando um usuário digita algo no campo de input, o evento onChange é acionado. A função de callback é executada nesse momento e recebe um parâmetro e, que representa o evento ocorrido. Dentro da função de callback, e.target se refere ao elemento DOM que disparou o evento, ou seja, o campo de input em questão. O .value é a propriedade desse elemento que contém o valor atual do campo de input. Então, e.target.value representa o valor atual digitado pelo usuário no campo de input. Por fim, setName(e.target.value) é a chamada da função setName, que é o setter do estado name criado usando o hook useState. Essa chamada atualiza o valor do estado name com o valor atual digitado pelo usuário no campo de input. Resumindo, a linha de código onChange={(e) => setName(e.target.value)} define uma função de callback para atualizar o estado name sempre que houver uma alteração no campo de input. A função recebe o evento onChange, acessa o valor digitado no campo de input e atualiza o estado name com esse novo valor.
                        
                        //Callback functions são funções executadas após ações
                    ></input>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        >
                    </input>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>



        </div>


    )
}

export default Form