import './App.css';
import Countries from './features/Countries';
import Products from './features/products/Products';

function App() {
  return (
    <div className="mybox">
      <h1>welcome to basic React structure</h1>
      <Products></Products>
      <Countries></Countries>
    </div>
  );
}

export default App;
