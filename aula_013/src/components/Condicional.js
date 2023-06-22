import {useState} from 'react'

function Condicional (){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){ //No React, quando declaramos uma função de manipulação de eventos e a associamos a um elemento, o parâmetro "e" (convenção comum para o objeto de evento) é passado automaticamente para essa função. O objeto de evento contém informações sobre o evento que ocorreu, como o elemento alvo e métodos úteis, como o preventDefault() para evitar comportamentos padrão indesejados. Podemos acessar essas informações e utilizar os métodos para controlar o comportamento do evento e realizar ações personalizadas em resposta a ele.
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){ 
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <button 
                    type='submit' 
                    onClick={enviarEmail}>
                        Enviar email
                </button>
                {userEmail &&(
                    <div>
                        O email é {userEmail}
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>

    )
}

export default Condicional