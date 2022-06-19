import plus from '../assets/plus.svg'
import styles from'./Todo.module.scss';

export function Todo() {
  return (
    <div className={styles.content}>
      <div className={styles.createTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />

        <button type="submit">
          Criar
          <img src={plus} alt="Ícone de criar mais uma tarefa" />
        </button>
      </div>
    </div>    
  )
}