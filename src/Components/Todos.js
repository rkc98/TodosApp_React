import Todo from "./Todo";



const Todos=(props)=>{
    return <div className="container">
    <h1 className='text-center'>Todos List</h1>
    {props.todo.length===0?"no todos to display ": props.todo.map((todo)=>{
        return <div>
            <Todo todosdisp={todo} onDelete={props.onDelete} />
            <hr />
            </div>
    })}
    
    
    </div>
}
export default Todos;