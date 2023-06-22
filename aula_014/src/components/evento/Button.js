function Button (props){
    return <button onClick={props.event}>{props.text}</button> //Quando não preciso retornar um bloco completo, posso deixar de usar os parenteses
}

export default Button