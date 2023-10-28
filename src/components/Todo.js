import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

  const [copied, setCopied] = useState(false)
  const [copiedValue, setCopiedValue] = useState("")

  const setCopy = () => {
    window.alert("Todo content copied to the clipboard !")
  }


  return (
    <div className="Todo">

        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      
        <div>
      
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />

        <CopyToClipboard text={task.task} onCopy={() => setCopied(!copied)}>
          <FontAwesomeIcon className='copy-icon' icon={faCopy} beatFade onClick={setCopy} />
        </CopyToClipboard> 
          
        </div>


        
    </div>    
  )
}
