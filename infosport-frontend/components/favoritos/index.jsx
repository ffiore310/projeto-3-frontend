import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from '/components/header'
import './style.css';

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);
    let token = localStorage.getItem('token');
    const navigate = useNavigate();

    function getFavoritos() {
        const config = {
            headers: {
              Authorization: `token ${token}`,
            },
          };
        axios
            .get("http://localhost:8000/api/favorita/",config)
            .then((res) => {
                console.log(res.data);
                setFavoritos(res.data)
            });
        }
    function desfavorita(itemName) {
        const config = {
            headers: {
              Authorization: `token ${token}`,
            },
            data: { // Inclua os dados aqui dentro do objeto `data` na configuração
              name: itemName
          },
          };
        axios
            .delete(`https://projeto-3-back.onrender.com/api/favorita/delete`,config)
            .then((res) => {
                console.log(res.data);
                axios
                  .get("https://projeto-3-back.onrender.com/api/favorita/",config)
                  .then((res) => {
                      console.log(res.data);
                      setFavoritos(res.data)
                  });
            });
        }
    
    useEffect(() => {
        getFavoritos();
        }, []);

    return (
      <div>
        <Header />
        <div className="favoritos">
            <div className="timesFavoritos">
            <ul className = "team-list">
              
            {favoritos.map((fav, index) => (
              <div className="card">
              <li className = "team-item"key={index}>
                {fav.title}
                <button className = "favorite-button" onClick={() => desfavorita(fav)}>★</button>
              </li>
              </div>
            ))}
            
            </ul>
            <button onClick={() => navigate('/')}>Ir para Home</button> 
            </div>
        </div>
        </div>
    );
}
