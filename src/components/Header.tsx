import logo from '../assets/rocket.svg'
import { CreateTodo } from './CreateTodo'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo da to-do list: foguete prestes a ser lançado ao espaço" />
        <p>to<span>do</span></p>
      </div>

      <CreateTodo />
    </div>
  )
}