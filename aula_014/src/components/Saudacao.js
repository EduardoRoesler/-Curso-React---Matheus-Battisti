export default function Saudacao ({nome}){
    function gerarSaudacao(algumNome){
        return(`Olá ${algumNome}, tudo bem?`)
    }
    
    return (//Este bloco realiza a checagem se existe nome, e rendeniza a saudação (rendenização condicional)
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>} 
        </div>
    )
}