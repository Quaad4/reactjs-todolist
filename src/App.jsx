import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: 
      newList
    }))
  }

  function handleInputChange(e) {
    setTodoValue(e.target.value)
  }

  function handleAddTodos(newTodo) {
    if(newTodo.trim() !== "") {
      const newTodoList = [...todos, newTodo];
      setTodos(newTodoList);
      persistData(newTodoList)
      setTodoValue("")
    }
  }

  function handleDeleteTodo(index) {  
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} handleInputChange={handleInputChange} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
