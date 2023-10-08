import './App.css';
import Todolist from './features/todolist/Todolist';
import Counter from './features/counter/Counter'

function App() {
  return (
    <div className="mybox">
      <h1>welcome to basic React structure</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
    
    
  );
}

export default App;
