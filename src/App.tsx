import './global.scss'
import './App.module.scss'
import { Header } from './components/Header'
import { Todo } from './components/Todo'

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Todo />
    </div>
  )
}
