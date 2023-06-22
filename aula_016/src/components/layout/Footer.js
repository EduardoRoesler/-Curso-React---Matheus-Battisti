import style from './NavBar.module.css'
import {FaFacebook, FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'


export default function Footer (){
    return <footer className={style.footer}>
        <FaGithubSquare/>
        <FaLinkedin/>
        <FaWhatsappSquare/>
    </footer>
}