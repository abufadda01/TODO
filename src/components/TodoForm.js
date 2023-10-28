import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'


export const TodoForm = ({addTodo}) => {
    
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false)

  
    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  
      return (
        
        <form onSubmit={handleSubmit} className="TodoForm">
        
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
          <button type="submit" className='todo-btn'>Add Todo</button>
     
        </form>
  )
}
