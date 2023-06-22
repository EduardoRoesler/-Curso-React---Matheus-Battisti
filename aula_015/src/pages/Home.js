import style from './Pages.module.css'

export default function Home(){
    return(
    <div>
        <h1 className={style.title}>Home</h1>
        <p className={style.p}>Conteúdo da página 'Home'</p>
    </div>
    )
}