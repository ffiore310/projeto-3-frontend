import axios from "axios";
import './App.css'
import Header from '../components/header'
import Cadastro from '../components/cadastro'

function App() {

  const config = {headers: {
    'X-RapidAPI-Key': 'e1c9dc4910msha22f12bf8ae6ee5p121aedjsnc98f63a23ecd',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }};
  axios
    .get(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/BR/regions/${isoCode}/`, config)
    .then((res) => {
      setDetalhes(res.data.data);
      console.log(res.data.data);
    });



  return (
    <div>
      <Header />
      <Cadastro />
    </div>
  )
}

export default App
