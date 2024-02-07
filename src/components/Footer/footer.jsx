import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <img src="/img/logoTravel.png" alt="" />
            <ul className="footer-group">
                <li>
                    <h4>Localização</h4>
                </li>
                <li>
                    <p>Av. Ministro Geraldo Barreto Sobral, 2100Sala 1405, Jardins, CEP: 49026-240, Aracaju/SE</p>
                </li>
            </ul>
            <ul className="footer-group">
                
                <li><b>Código de Ética</b></li>
                <li><b>Política de Qualidade</b></li>
                <li><b>Política de privacidade</b></li>
            </ul>
            <ul className="footer-group">
                <li><h4>Atendimento</h4></li>
                <li><p>(79) 99886-9698</p></li>
                <li><p>atendimento@mundi.com</p></li>
            </ul>
            <p>Copyright © 2024 - Todos os direitos reservados.</p>
        </footer>
    )
}