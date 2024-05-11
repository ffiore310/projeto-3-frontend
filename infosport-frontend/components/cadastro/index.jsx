import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


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
            url: 'http://localhost:8000/api/users/',
            headers: {accept: 'application/json'},
            data: data
        }

        try {
            await axios.request(options);
            console.log("Sucesso ao criar usuário");
            setMsgSucesso(true);
            setTimeout(() => navigate('/'), 2000);
  
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
        <form onSubmit={sendUser}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Digite seu username" onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="senha" name="senha" placeholder="Digite sua senha" onChange={(event) => setSenha(event.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Digite seu email"  onChange={(event) => setEmail(event.target.value)} />
            </div>
            
            <button type="submit">Sign Up</button>
            <div className="msgSucesso">
                {msgSucesso && <p>Usuário criado com sucesso! Redirecionando para a Home...</p>}
            </div>
            <div className="msgError">
                {error && <p>{error}</p>}
            </div>
        </form>
    );
}