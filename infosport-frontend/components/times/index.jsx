import axios from "axios";
import { useEffect, useState } from "react";
import './style.css';
import Header from '/components/header'





function Times() {
    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState('');
    const [favoritedTeams, setFavoritedTeams] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const options = {
            method: 'GET',
            url: "https://projeto-3-back.onrender.com/api/soccer/",
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
        setTimeout(() => setMessage(''), 1500); 
        return;
    }

      console.log("Favoritando time", team);
      const url = "https://projeto-3-back.onrender.com/api/favorita/"; // URL do endpoint do backend Django
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
        <Header />
<div>
  <h1 className="title">Times</h1>
  
  <ul className="team-list">
    {teams.map((team, index) => (
      <div className="card">
      <li key={index} className="team-item">
        {team}
        <button className = "favorite-button" onClick={() => favoritarTime(team)}>☆</button>
        
      </li>
      </div>
    ))}
  </ul>
  
</div>
{message && <p className="feedback-message">{message}</p>}
</div>
      );
    }
    
    export default Times;