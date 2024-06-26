import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favoritos from '../components/favoritos';
import Cadastro from '../components/cadastro';
import Table from '../components/table';
import Times from '../components/times';
import Games from '../components/games/index.jsx';
import Login from '../components/login';
import Inicio from '../components/inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "favoritos",
    element: <Favoritos />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
  {
    path: "table",
    element: <Table />,
  },
  {
    path: "times",
    element: <Times />,
  },
  {
    path: "games",
    element: <Games/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/inicio",
    element: <Inicio />,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)