import { PlusCircle } from "phosphor-react";
import './Todo.module.css';

export function Todo() {
  return (
    <div className="content">
      <div className="createTask">
        <input type="text" />

        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button> 
      </div>
    </div>    
  )
}