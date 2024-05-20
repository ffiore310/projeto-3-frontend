import { useState, useEffect } from "react"
import axios from 'axios';
import "./styles.css";
import Header from '/components/header'

export default function Games() {
    const [data, setData] = useState([]);
    const [carregando, setCarregando] = useState(true);
    

    async function getData(){
        const options = {
            method: "GET",
            url: 'http://localhost:8000/api/soccer/games',
            headers: {accept: 'application/json'}
        } 
        try {
            const response = await axios.request(options);
            console.log("Sucesso ao buscar os jogos", response.data);
            console.log("comando em questao: ", (response.data.sport_event_probabilities || []));
            setData(response.data.sport_event_probabilities || []);
        } catch (error) {
            console.error("Falha ao buscar os jogos", error);
            return [];
        } finally {
            setCarregando(false);
        }

    }

    useEffect(() => {
        getData();
    }, []);

    const timeAtual = new Date();

    const games = data.length > 0 ? data.filter(event => new Date(event.sport_event.start_time) > timeAtual): [];

    return (
        <div>
        <Header />
        <div>

        <h1>Partidas</h1>
            <div className="tudo">
            {carregando ? (
                <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
                
                games.map(event => (
                    <div key={event.sport_event.id} className="game-widget">
                       
                        <div className="teams">
                            <span className="team home-team">
                                {event.sport_event.competitors.find(c => c.qualifier === "home").name}
                            </span>
                            <span className="vs"> vs </span>
                            <span className="team away-team">
                                {event.sport_event.competitors.find(c => c.qualifier === "away").name}
                            </span>
                        </div>
                       
                        <div className="probabilities">
                            <span className="probability_home">
                                Home Win: {event.markets[0].outcomes.find(o => o.name === "home_team_winner").probability}%
                            </span>
                            <span className="probability_draw">
                                Draw: {event.markets[0].outcomes.find(o => o.name === "draw").probability}%
                            </span>
                            <span className="probability_away">
                                Away Win: {event.markets[0].outcomes.find(o => o.name === "away_team_winner").probability}%
                            </span>
                        </div>
                        <div className="game-date">
                            {new Date(event.sport_event.start_time).toLocaleString()}
                        </div>
                    </div>
                ))
            )}
        </div>
        </div>
        </div>
    )
}