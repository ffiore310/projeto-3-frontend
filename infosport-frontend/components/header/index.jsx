import './style.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <img src="/logo.png" alt="Logo" className="logo" />
            <h1 className="appName">InsperBrasileirao</h1>
            <Link to={`favoritos`}>✏️</Link>
        </div>
    );
}
