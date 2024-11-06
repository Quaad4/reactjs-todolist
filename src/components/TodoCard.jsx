export default function TodoCard(props) {

    const {children, handleDeleteTodo, index, handleEditTodo, handleTodoUp, handleTodoDown} = props;

    return (
    <li className="todoItem">
        {children}
        <div className='actionsContainer'>
            <button onClick={() => handleTodoUp(index)}>Up</button>
            <button onClick={() => handleTodoDown(index)}>Down</button>
            <button onClick={() => handleEditTodo(index)}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDeleteTodo(index)}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
    )
}
