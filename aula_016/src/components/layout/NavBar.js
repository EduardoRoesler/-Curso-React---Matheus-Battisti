import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar (){
    return (
        <ul className={styles.list}>
          <li className={styles.item}><Link to='/' style={{ textDecoration: 'inherit', color: 'inherit' }}>Home</Link></li>
          <li className={styles.item}><Link to='/empresa' style={{ textDecoration: 'inherit', color: 'inherit' }}>Empresa</Link ></li>
          <li className={styles.item}><Link to='/contato' style={{ textDecoration: 'inherit', color: 'inherit' }}>Contato</Link></li>
        </ul>
    )
}