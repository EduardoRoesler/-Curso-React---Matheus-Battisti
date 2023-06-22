import PropTypes from 'prop-types'

function Item ({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = { //Importante, para acessar a propriedade usa-se camel case, pois ele é como se fosse um pacote importado
    marca: PropTypes.string.isRequired, //ao colocar o isRequired, digo que é necessário que o campo seja preenchido
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = { //Irá retornar um valor padrão quando não preenchido
    marca: "Marca não preenchida", //Quando passo um defaultProps, o isRequired será sanado, pois foi preenchido pelo valor padrão
    ano_lancamento: 0,
}

export default Item