import "./plans.css"

export default function Plans({title, transport, passage, ride, hosting }) {
    return (
        <div className="plans-container">
            <h2>{title}</h2>

            <div className="plan">
                <img src={passage ? "/icons/Ok.png" : "/icons/Cancel.png"} alt="" />
                <p>Passagem</p>
            </div>
            <div className="plan">
                <img src={transport ? "/icons/Ok.png" : "/icons/Cancel.png"} alt="" />
                <p>Transporte</p>
            </div>
            <div className="plan">
                <img src={ride ? "/icons/Ok.png" : "/icons/Cancel.png"} alt="" />
                <p>Passeio</p>
            </div>
            <div className="plan">
                <img src={hosting ? "/icons/Ok.png" : "/icons/Cancel.png"} alt="" />
                <p>Hospedagem</p>
            </div>
        </div>
    )
}