import axios from "axios";
import { useState, useEffect } from 'react';

export default function Table() {
    

    const [data, setData] = useState([]);

    async function getTable() {
        const options = {
            method: 'GET',
            url: 'http://localhost:8000/api/soccer/table',
            headers: {accept: 'application/json'}
        }
        try {
            const response = await axios.request(options);
            console.log("Sucesso ao buscar jogadores", response.data);
            return response.data;
        } catch (error) {
            console.error("Falha ao buscar jogadores", error);
            return [];
        }
    }

    useEffect(() => {
        getTable().then((data) => setData(data));
    }, []);

    const fullTimeTotal = data?.season_form_standings?.find(standing => standing.type === "full_time_total")?.groups[0]?.form_standings;


    return (
        <table>
            <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Time</th>
                        <th>Jogos</th>
                        <th>Vitórias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                        <th>Gols Pró</th>
                        <th>Gols Contra</th>
                        <th>Saldo de Gols</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {fullTimeTotal?.map((team, index) => (
                        <tr key={team.competitor.id}>
                            <td>{index + 1}</td>
                            <td>{team.competitor.name}</td>
                            <td>{team.played}</td>
                            <td>{team.win}</td>
                            <td>{team.draw}</td>
                            <td>{team.loss}</td>
                            <td>{team.goals_for}</td>
                            <td>{team.goals_against}</td>
                            <td>{team.goals_diff}</td>
                            <td>{team.points}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    );
}