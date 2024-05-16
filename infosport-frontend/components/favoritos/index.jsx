import axios from "axios";
import { useEffect, useState } from "react";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);
    let token = localStorage.getItem('token');

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
    
    useEffect(() => {
        getFavoritos();
        }, []);

    return (
        <div className="favoritos">
            <h1>Times Favoritos</h1>
            <div className="timesFavoritos">
            <ul>
            {favoritos.map((fav, index) => (
              <li key={index}>
                {fav.title}
                <button onClick={() => desfavorita(fav.sigla)}>Desfavoritar</button>
              </li>
            ))}
            </ul>
            </div>
        </div>
    );
}
