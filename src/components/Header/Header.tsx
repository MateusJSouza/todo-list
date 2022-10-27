import logo from '../../assets/rocket.svg'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Header.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");
  
  // A task é adicionada quando o formulário é submetido (enviado)
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // 
    onAddTask(title);
    setTitle("");
  }

  // Quando o valor do input mudar, o estado do título da task será alterado para esse novo valor
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  
  return (
    <div className={styles.header}>
      <img src={logo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder='Adicione uma nova tarefa'
          type='text'
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}