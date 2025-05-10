import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";



function App() {
  
  return <center class='todo-container'>
    <AppName/>
    <AddTodo/>
    <div className='items-container'>
    <TodoItem todoName="Buy Milk" todoDate="24/10/24"></TodoItem>
    <TodoItem todoName="Go to Home Town" todoDate="07/11/24"></TodoItem>
   </div>
    
     </center>
    
}

export default App;
