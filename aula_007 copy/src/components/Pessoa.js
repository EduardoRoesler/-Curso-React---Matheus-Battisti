function Pessoa ({foto, nome, idade, profissao}){ //Como estou usando as variáveis nas chaves, não preciso chamar props. Este recurso é chamado structure
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa