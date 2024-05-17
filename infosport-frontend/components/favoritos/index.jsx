import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

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
            .delete(`http://localhost:8000/api/favorita/delete`,config)
            .then((res) => {
                console.log(res.data);
                axios
                  .get("http://localhost:8000/api/favorita/",config)
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
        <div className="favoritos">
            <div className="timesFavoritos">
            <ul>
            {favoritos.map((fav, index) => (
              <li key={index}>
                {fav.title}
                <button onClick={() => desfavorita(fav)}>Desfavoritar</button>
              </li>
            ))}
            </ul>
            <button onClick={() => navigate('/')}>Ir para Home</button> 
            </div>
        </div>
    );
}
