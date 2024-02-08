import "./mobileMenu.css"
import { Link } from "react-scroll";

export default function MobileMenu ({ setActive, active }) {
    return (
        <div className={`container ${active ? "open" : ""}`} >
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="sobre">Sobre</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="destinos">Destinos</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="pacotes">Pacotes</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="contato">Contato</Link>
        </div>
    );
}