import styles from './Todo.module.scss';

import clipboard from '../assets/Clipboard.svg'

export function Todo() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <p>Tarefas criadas <span>0</span></p>

        <p>Concluídas <span>0</span></p>
      </section>
      
      <section className={styles.tasks}>
        <img src={clipboard} alt="Ícone de prancheta: referente a anotações de tarefas" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </section>
    </div>
  )
}