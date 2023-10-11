import './App.css';
import {Link, Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="navigation-bar">
      <div className='header'><h1>Welcome to EdupolyKart</h1></div>

      <div className='links'>
        <Link to='/products'>products</Link>&nbsp;&nbsp;&nbsp;
        <Link to='addproducts'>AddProduct</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
