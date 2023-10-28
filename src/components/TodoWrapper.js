import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();


export const TodoWrapper = () => {
    
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState('');


    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);



    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }



    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }



    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }



    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }



    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

        

  return (
    
    <div className="TodoWrapper">
    <h1>Add Your Todos !</h1>
    <TodoForm addTodo={addTodo} />
    <input type="text" onChange={(e) => setSearch(e.target.value)} className="todo-input search" placeholder='search todo' />

    
    {/* display todos */}
    {todos.filter((todo) => {
      return search.toLocaleLowerCase() === "" ? todo : todo.task.toLocaleLowerCase().includes(search)
    }).map((todo) =>
      todo.isEditing ? (
        <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
      ) : (
        <Todo
          key={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      )
    )}
  </div>
  )
}
