import React from 'react'

function Todo({todo, onRemoveTodo,onChangeComplete}) {
  const status = [
    todo.completed ? 'status__true' : 'status__false'
  ].join(' ')
 
  return <tr>
    <td onClick={()=>onChangeComplete(todo.id)} className={status}>{todo.content}</td>
    <td>
      <button onClick={() => onRemoveTodo(todo.id)}>&times;</button>
    </td>
  </tr>
}

export default Todo