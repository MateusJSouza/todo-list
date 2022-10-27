import { Task } from '../Task/Task';
import styles from './Tasks.module.css';

import { ITask } from '../../App';
import { TbClipboardText } from 'react-icons/tb';

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  /* 
    Filtra pelas tasks com o isCompleted como "true" e pega a quantidade de 
    tarefas concluídas
  */
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
            <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {/* Para fazer as tasks ficarem dinâmicas, é necessário passar
        o parâmetro "task" como propriedade pra dentro do componente Task */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
          
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}