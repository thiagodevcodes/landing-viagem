import "./mobileButton.css"

export default function MobileButton({ setActive, active }) {
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <button className="button" onClick={handleClick}>
            <div className={`line1 ${active ? "active" : ""}`}></div>
            <div className={`line2 ${active ? "active" : ""}`}></div>
            <div className={`line3 ${active ? "active" : ""}`}></div>
        </button>
    );
}