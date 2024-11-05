export default function TodoInput(props) {
    const {handleAddTodos, todoValue, handleInputChange} = props

    return (
        <header>
            <input placeholder='Enter ToDo...' value={todoValue} onChange={handleInputChange} name="todoInput"/>
            <button onClick={() => handleAddTodos(todoValue)}>Add</button>
        </header>
    )
}
