import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, handleDeleteTodo} = props

    return (
        <ul className='main'>
            {todos.map((todo, index) => {
                return (
                    <TodoCard key={index} {...props} index={index}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
