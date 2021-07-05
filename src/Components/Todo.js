

const Todo=(props)=>{
    return <div>
     <h4>{props.todosdisp.title}</h4>
     <p>{props.todosdisp.desc}</p>
     <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todosdisp)}}>Delete </button>
    </div>
}
export default Todo;