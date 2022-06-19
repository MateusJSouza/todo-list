import logo from '../assets/rocket.svg'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo da to-do list: foguete prestes a ser lançado ao espaço" />
      <p>to<span>do</span></p>
    </div>
  )
}