import axios from "axios";
import { useEffect, useState } from "react";



function Times() {
    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState('');
    const [favoritedTeams, setFavoritedTeams] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const options = {
            method: 'GET',
            url: "http://localhost:8000/api/soccer/",
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                console.log(response.data["season_competitors"]);
                const teamNames = response.data["season_competitors"].map(team => team.name);
                setTeams(teamNames);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    function favoritarTime(team) {
      if (favoritedTeams.includes(team)) {
        setMessage(`O time ${team} já está favoritado!`);
        setTimeout(() => setMessage(''), 1500); // Limpa a mensagem após 5 segundos
        return;
    }

      console.log("Favoritando time", team);
      const url = "http://localhost:8000/api/favorita/"; // URL do endpoint do backend Django
      const body = {'name': team}; // ou qualquer dado específico que o backend precisa
      const config = {
        headers: {
          Authorization: `token ${token}`,
        },
      };
      axios.post(url, body, config)
        .then((res) => {
          console.log(res.data);
          setFavoritedTeams(prev => [...prev, team]); // Adiciona o time à lista de favoritados
          setMessage(`Time ${team} favoritado com sucesso!`);
          setTimeout(() => setMessage(''), 1500);
        });
    }
  
  
      return (
        <div>
          <h1>Nomes dos Times:</h1>
          {message && <p>{message}</p>} {/* Mostra a mensagem de feedback */}
          <ul>
            {teams.map((team, index) => (
              <li key={index}>
                {team}
                <button onClick={() => favoritarTime(team)}>Favoritar</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Times;