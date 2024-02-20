import "./layout.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


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