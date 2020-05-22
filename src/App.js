import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Buy milk',completed:true},
    { id: 2, content: 'Buy peanut',completed:true}
  ])

  const onRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onAddTodo = newTodoContent => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        content: newTodoContent
      }
    ])
  }

  const onChangeComplete=(id)=>{
    const newTodos=[...todos];
    const index=newTodos.findIndex(todo=>todo.id===id);

    const item={
      ...newTodos[index],
      completed:!newTodos[index].completed
    }
    newTodos[index]=item;

    setTodos(newTodos)
    
  }

  const handleFilter=()=>{
    
  }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo}/>
      <Filter handleFilter={handleFilter}/>
      <TodoList todos={todos} onChangeComplete={onChangeComplete} onRemoveTodo={onRemoveTodo}/>
    </>
  )
}

export default App;