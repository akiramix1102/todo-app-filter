import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo,onChangeComplete}) {
  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tbody>
          {todos.map(todo => 
            <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onChangeComplete={onChangeComplete}/>  
          )}
        </tbody>
      </table>
    </>
  )
}

export default TodoList