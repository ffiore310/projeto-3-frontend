import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from '/components/header'
import './style.css';

export default function Inicio() {

        const navigate = useNavigate();


   

    
    return (
        <body>
      <div>
        <Header />
        <div className="inicio">
            
            <h1 className = "title">Insper Brasileirão</h1>
            <p>Seja bem vindo ao Insper Brasileirão</p>
            <p>Aqui você pode acompanhar os jogos de futebol em tempo real, favoritar seus times e muito mais</p>
        </div>
        <div className="buttons">
        <button  onClick={() => navigate('/login')}>Já é cliente ? Faça login</button>
        <button  onClick={() => navigate('/cadastro')}>Ainda não é cliente ? Cadastre-se</button>
        </div>
        
        <button onClick={() => navigate('/times')}>Continuar sem logar</button>
           
        </div>
        </body>

    )
}
