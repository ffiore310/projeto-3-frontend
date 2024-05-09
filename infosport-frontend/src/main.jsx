import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favoritos from '../components/favoritos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "favoritos",
    element: <Favoritos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)