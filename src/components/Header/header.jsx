import "./header.css"
import Nav from "../Nav/nav"
import MobileButton from "../MobileButton/mobileButton";
import MobileMenu from "../MobileMenu/mobileMenu";
import { useState, useEffect } from "react";

export default function Header() {
    const [width, setWidth] = useState(0)
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
    
          setWidth(window.innerWidth);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, [])
    

    return (       
        <header className="header">
            <div className="header-container">
                <img src="/img/logoTravel.png" alt="Logo do Site" />
                { width < 915 ? <MobileButton setActive={setActive} active={active}/> : <Nav/> } 
            </div>
            { width < 915 && <MobileMenu setActive={setActive} active={active} />}
        </header>
    )
}