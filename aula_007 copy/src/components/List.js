import Item from "./Item" //Como item é um fragment, eu consigo encaixá-lo diretamente na lista

function List (){
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="VW"/>
                <Item marca="Audi"/>
                <Item marca="Jac"/>
            </ul>
        </>


    )
}

export default List