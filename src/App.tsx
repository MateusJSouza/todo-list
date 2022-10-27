import { useState } from 'react';

import { Header } from './components/Header/Header'
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

import './global.scss'
import './App.module.scss'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function setTaskAndSave(newTask: ITask[]) {
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  }

  function addTask(taskTitle: string) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    // Filtrando a task pelo id para verificar se os dois são iguais
    const newTasks = tasks.filter(task => task.id === taskId)
    // Setando no estado
    setTaskAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
         ...task,
          isCompleted:!task.isCompleted,
        }
      }
        return task;
    });
    setTaskAndSave(newTasks)
  }

  return (
    <div className="wrapper">
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  )
}
