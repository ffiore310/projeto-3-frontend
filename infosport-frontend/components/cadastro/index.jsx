import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from '/components/header'

export default function Cadastro() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msgSucesso, setMsgSucesso] = useState(false);
    const [error, setError] = useState('');

    async function sendUser(event) {
        event.preventDefault();

        const data = {
            "username": username,
            "email": email,
            "password": senha
        }

        const options = {
            method: 'POST',
            url: 'https://projeto-3-back.onrender.com/api/users/',
            headers: {accept: 'application/json'},
            data: data
        }

        try {
            await axios.request(options);
            console.log("Sucesso ao criar usuário");
            setMsgSucesso(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            console.error("Falha ao criar usuário", error);
            if (error.response && error.response.status === 500) {
                setError('Este nome de usuário já está em uso. Insira outro');
            } else {
                setError('Ocorreu um erro ao criar o usuário. Tente novamente.');
            }
        }
    }

    return(
        <div>
            <Header />
        <h1>Cadastro</h1>
        <form onSubmit={sendUser}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Usuário</label>
                <input type="text" className="form-control" id="username" placeholder="Digite seu username" onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" onChange={(event) => setSenha(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu email"  onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary bg-dark">Cadastrar</button>
            <div className="msgSucesso">
                {msgSucesso && <p>Usuário criado com sucesso! Redirecionando para a tela de Login...</p>}
            </div>
            <div className="msgError">
                {error && <p>{error}</p>}
            </div>
        </form>
        </div>
    );
}