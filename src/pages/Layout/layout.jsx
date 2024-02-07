import "./layout.css"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"

export default function Layout({ children }) {
    return (
        <div className="root">
            <Header/>

            <main className="main">
                { children }
            </main>
            
            <Footer/>
        </div>
    )
}