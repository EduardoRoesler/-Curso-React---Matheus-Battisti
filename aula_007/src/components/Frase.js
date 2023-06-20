import styles from './Frase.module.css' //A importação é como se fosse de um componente

function Frase(){ //Depois chamo esse componente como se fosse uma props
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase