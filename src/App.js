
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodos from './Components/AddTodos';
import {useState} from 'react';


function App() {
  const deletetodos=(todo)=>{
    console.log("i am on delete",todo);
    // let index=todosarray.indexOf(todo);
    // todosarray.splice(index,1);
    settodos(todosarray.filter((e)=>{
      return e!==todo;
    }))
  }
   
  const [todosarray,settodos]=useState([
    {
      id:1,
      title:"go to the market",
      desc:"yo need to go the market to buy some groceries"
    },
    {
      id:2,
      title:"Start learning React",
      desc:"this will be used to develop front end "
    },
    {
      id:3,
      title:"Start learning Spring_boot",
      desc:"this will be used to develop back end "
    }
  ]);
 const addtodos=(title,desc)=>{
   console.log(title,desc);
   let id=todosarray[todosarray.length-1]+1;
  const mytodo={
    id:id,
    title :title,
    desc:desc
  }
  console.log(mytodo);
  settodos([...todosarray,mytodo])
 }
  return <div> 
    <Header title="Todos List" />
    <AddTodos addtodo={addtodos}/>
    <Todos todo={todosarray} onDelete={deletetodos} />
    <Footer />
    </div>
}

export default App;
