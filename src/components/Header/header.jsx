import "./header.css"
import Nav from "../Nav/nav"

export default function Header() {
    return (
        <header className="header">
            <img src="/img/logoTravel.png" alt="Logo do Site" />
            <Nav/>
        </header>
    )
}