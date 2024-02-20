import "./card.css"

export default function Card({ title, description, img }) {
    return (
        <div className="card"> 
            <img src={img} alt="" />

            <div className="card-body">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>          
        </div>
    )
}