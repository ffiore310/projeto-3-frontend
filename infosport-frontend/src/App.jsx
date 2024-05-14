import axios from "axios";
import './App.css'
import Header from '../components/header'
import Cadastro from '../components/cadastro'
import Times from '../components/times';

function App() {

  return (
    <div>
      <Header />
      <Cadastro />
      <Times />
    </div>
  )
}

export default App
