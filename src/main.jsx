import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Impressum from './Impressum'
import Datenschutz from './Datenschutz'
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Impressum",
    element: <Impressum />,
  },
  {
    path: "/Datenschutz",
    element: <Datenschutz />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);