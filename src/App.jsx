import './App.css';
import Countries from './features/Countries';
import Products from './features/products/Products';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>welcome to basic React structure</h1>
      {/* <Products></Products>
      <Countries></Countries> */}

      <Link to='/countries'>countries</Link> &nbsp;&nbsp;&nbsp;
      {/* <Link to='/countriesdetails'>countriesdetails</Link> &nbsp;&nbsp;&nbsp; */}
      <Link to='/products'>products</Link> &nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>

    </div>
  );
}

export default App;
