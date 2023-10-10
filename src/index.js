import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './app/store'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Countries from './features/Countries';
import Countrydetails from './features/Countrydetails'
import Products from './features/products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
    {
    path: "/countries",
    element: <Countries></Countries>,
    children:[
      {
        path: "/countries/countrydetails/:cname",
        element: <Countrydetails></Countrydetails>,
      },
    ]
  },
  
  {
    path: "/products",
    element: <Products></Products>
  },
]
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
