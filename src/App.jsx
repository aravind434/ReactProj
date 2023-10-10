import './App.css';
import {Link, Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="mybox">
      <h1>Welcome to EdupolyKart</h1>
      <Link to='/products'>products</Link>&nbsp;&nbsp;&nbsp;
      <Link to='addproducts'>AddProduct</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
