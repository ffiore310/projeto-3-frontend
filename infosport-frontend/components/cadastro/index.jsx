import axios from "axios";
import { useState } from "react";


export default function Cadastro() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const criaUsuario = (event) => {
        event.prentDefault();

        const data = {
            "nome": username,
            "emial": email,
            "senha": senha
        }
        const options = {
            method: 'POST',
            url: 'http://localhost:8000/usuario',
            headers: {accept: 'application/json'},
            data: data
        }

        try{
            axios.request(options)
            console.log("Sucesso ao criar ususario")
        } catch (error) {
            console.error("Falha ao criar ususario", error)
        }
    }

    return(
        <form onSubmit={criaUsuario}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Digite seu username" onChange={(event) => {setUsername(event.target.value), console.log(event.target.value)}} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Digite seu email"  onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="senha" name="senha" placeholder="Digite sua senha" onChange={(event) => setSenha(event.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}