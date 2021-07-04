
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  const deletetodos=(todo)=>{
    console.log("i am on delete");
    let index=todosarray.indexOf(todo);
    todosarray.splice(index,1);
  }
   
  let todosarray=[
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
  ]

  return <div> 
    <Header title="Todos List" />
    <Todos todo={todosarray} onDelete={deletetodos} />
    <Footer />
    </div>
}

export default App;
