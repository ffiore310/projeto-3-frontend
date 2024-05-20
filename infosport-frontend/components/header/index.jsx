import './style.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        
   
            <nav class="navbar navbar-expand bg-dark fixed-top" data-bs-theme="dark" >

            <div className="container-fluid">
                <img src="/public/img/logo.png" alt="Logo" width="50" height="50" />
                <Link className="navbar-brand" to="/inicio">InsperBrasileirao</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                        <li className="nav-item mt-2">
                            <Link className="nav-link active" aria-current="page" to="/table">Tabela</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link active" to="/games">Partidas</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link active" to="/times">Times</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link active" to="/favoritos">Favoritos</Link>
                        </li>
                        <li className="nav-item">
                        <div className="dropdown">
                            <button className="dropbtn">Conta</button>
                            <div className="dropdown-content">
                                <Link  to="/login">Login</Link>
                                <Link to="/cadastro">Cadastro</Link>
                            </div>
                        </div>

                        </li>
                        

                    </ul>

                </div>
            </div>
        </nav>
      
    );
}