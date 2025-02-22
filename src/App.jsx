import { useState } from 'react';
import './styles.css'
import List from './List';

const App = () => {
  const [newTodoName,setNewTodoName]=useState("");
  const [todos,setTodos]=useState([]);
  function addNewTodo(){
    if(newTodoName===""){
      return ;
    }
    setTodos(currentTodos=>{
      return [...currentTodos,{name:newTodoName,completed:false,id:crypto.randomUUID()}]
    })
    setNewTodoName("")
  }

  function toggleTodo(todoId,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===todoId){
          return {...todo,completed}
        }
          return todo
      })
    })
  }
  function deleteItem(todoId){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==todoId)
    })
  }
  return (
    <>
    <ul id="list">
     {
      todos.map(todo=>{
        return <List name={todo.name} completed={todo.completed} id={todo.id} key={todo.id} toggleTodo={toggleTodo} deleteItem={deleteItem}></List>
      })
     }
    </ul>
  
    <div id="new-todo-form">
    <label htmlFor="todo-input">New Todo</label>
    <input type="text" id="todo-input" value={newTodoName} onChange={(e)=>setNewTodoName(e.target.value)} />
    <button onClick={addNewTodo}>Add Todo</button>
  </div>
  </>
  );
};


export default App;