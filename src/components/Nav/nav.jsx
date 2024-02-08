import "./nav.css"
import { Link } from "react-scroll"

export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link smooth={true} duration={500} to="sobre">Sobre</Link></li>
                <li><Link smooth={true} duration={500} to="destinos">Destinos</Link></li>
                <li><Link smooth={true} duration={500} to="pacotes">Pacotes</Link></li>
                <li><Link smooth={true} duration={500} to="contato">Contato</Link></li>
            </ul>
        </nav>
    )
}



            
            
            