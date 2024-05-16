import axios from "axios";
import { useEffect, useState } from "react";



function Times() {
    const [teams, setTeams] = useState([]);
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
        });
    }
  
  
      return (
        <div>
          <h1>Nomes dos Times:</h1>
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