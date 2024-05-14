import axios from "axios";
import { useEffect, useState } from "react";



function Times() {
    const [teams, setTeams] = useState([]);
    //const options = {headers: {accept: 'application/json'}};
  
    useEffect(() => {
        

        const options = {
            method: 'GET',
            url: "http://localhost:8000/api/soccer/",
            //params: {api_key: 'o4FFngW73VpSgSoIadrB8seMLGUwvok1n5HNY8Zc'},
            //headers: {accept: 'application/json'}
            };

            axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    //   axios
    //     .get('https://api.sportradar.com/soccer/trial/v4/en/seasons/sr%3Aseason%3A113943/competitors.json?api_key=o4FFngW73VpSgSoIadrB8seMLGUwvok1n5HNY8Zc', options)
    //     .then((res) => {
    //         // Extrair os nomes dos times da resposta
    //         console.log("meu nome é eduardo")
    //         console.log(res)
    //         //const teamNames = res.data.competitors.map(team => team.name);
    //         //setTeams(teamNames);
    //       })
    //       .catch((error) => {
    //         console.error('Erro ao buscar os times:', error);
    //       });
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