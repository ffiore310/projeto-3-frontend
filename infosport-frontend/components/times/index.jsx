import axios from "axios";
import { useEffect, useState } from "react";



function Times() {
    const [teams, setTeams] = useState([]);

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
  
  
      return (
        <div>
          <h1>Nomes dos Times:</h1>
          <ul>
            {teams.map((team, index) => (
              <li key={index}>{team}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Times;