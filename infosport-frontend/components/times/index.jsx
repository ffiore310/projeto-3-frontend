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
                console.log(response.data.season_competitors);
                setTeams(response.data.season_competitors);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Nomes dos Times:</h1>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Times;
