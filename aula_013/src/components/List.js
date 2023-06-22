import Item from "./Item" //Como item é um fragment, eu consigo encaixá-lo diretamente na lista

function List (){
    return ( //Numbers precisam ser enviados entre chaves
        <>
            <h1>Lista</h1>
                <ul>
                    <Item marca="VW"/> 
                    <Item marca="Audi" ano_lancamento={2010}/>
                    <Item ano_lancamento={2018}/>
                </ul>
        </>
    )
}

export default List