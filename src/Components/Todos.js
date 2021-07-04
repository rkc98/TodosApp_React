import Todo from "./Todo";



const Todos=(props)=>{
    return <div className="container">
    <h1 className='text-center'>Todos List</h1>
    {props.todo.map((todo)=>{
        return <Todo todosdisp={todo} onDelete={props.onDelete} />
    })}
    
    </div>
}
export default Todos;