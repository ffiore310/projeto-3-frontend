import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '/components/header'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        const url = "https://projeto-3-back.onrender.com/api/token/";
        const body = {'username': username, "password": password};
        axios.post(url, body)
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/');
        })
    }

    return (
        <div>
        <Header />
        <div className="login-wrapper">
            <h1>Log In</h1>
            <form onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Usuário</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary bg-dark">Fazer Log In</button>
            </form>
        </div>
        </div>
    );
}