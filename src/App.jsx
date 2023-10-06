// import logo from './logo.svg';
// import Counter from './Countercomp';
import Counter from './components/Counter';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Todolist from './components/Todolist';

function App() {
  return (
    <Provider store={store}>
      <div className="mybox">
       <h1>welcome to react react-redux</h1>
       <Todolist></Todolist>
       <Counter></Counter>
      </div>
      
    </Provider>

    // <div className="mybox">
    //   <h1>welcome to react first application</h1>
    //   <Counter></Counter>
    // </div>
  );
}

export default App;
