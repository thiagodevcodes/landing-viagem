import "./nav.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to={"#"}>Sobre</Link></li>
                <li><Link to={"#"}>Destinos</Link></li>
                <li><Link to={"#"}>Pacotes</Link></li>
                <li><Link to={"#"}>Contatos</Link></li>
            </ul>
        </nav>
    )
}