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

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Posição</th>
                    <th>Time</th>
                    <th>Idade</th>
                    <th>Altura</th>
                    <th>Peso</th>
                </tr>
            </thead>
            <tbody>
                {data.map((player) => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>{player.team}</td>
                        <td>{player.age}</td>
                        <td>{player.height}</td>
                        <td>{player.weight}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}