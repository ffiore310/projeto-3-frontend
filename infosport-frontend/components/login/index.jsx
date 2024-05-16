import { useState } from 'react';
import axios from 'axios';
// import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        //TODO: Aqui é com você! Faça a requisição para o backend para a rota api/token/
        // O retorno da requisição deve ser um token 
        const url = "http://localhost:8000/api/token/"; // URL do endpoint do backend Django
        const body = {'username': username, "password": password}; // ou qualquer dado específico que o backend precisa
        axios.post(url, body)
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/');
        })
        }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={login}>
                <label>
                    <p>Username</p>
                    <input
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input 
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}