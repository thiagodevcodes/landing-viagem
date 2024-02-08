import Layout from "../Layout/layout";
import "./home.css"
import Card from "../../components/Card/card";
import Plans from "../../components/Plans/plans";
import Slider from "react-slick";

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/effect-fade'

export default function Home() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <Layout>
            <section className="about flex-center" id="sobre">
                <div className="container-text">
                    <h1>Mundi Viagens</h1>
                    <p>Aventure-se pelo mundo conosco! Na nossa agência de viagens, transformamos sonhos em realidade, criando experiências memoráveis em destinos exóticos, culturais e paradisíacos. Com uma equipe apaixonada por viagens e conhecimento global, estamos aqui para proporcionar momentos únicos e inesquecíveis em cada jornada.</p>
                </div>
                <img src="/img/image-banner.png" alt="" />
            </section>

            <section className="destination" id="destinos">
                <div className="title-container">
                    <img src="/icons/icon-airplane.png" alt="" />
                    <h2>Destinos</h2>
                </div>
                
                <div className="slider-container">
                    <div className="slider">
                        <Slider {...settings}>
                        <div className="item-slide">
                            <Card img={"/img/aracaju-card-img.png"} title={"Aracaju-SE"} description={"Aracaju, capital do estado de Sergipe, é uma cidade encantadora que combina beleza natural com história e cultura vibrantes"} />
                        </div>
                        <div className="item-slide">
                            <Card img={"/img/salvador-card-img.png"} title={"Salvador-BA"} description={"Conhecida por suas vibrantes festas, como o Carnaval, e suas praias paradisíacas, Salvador cativa visitantes com seu charme único."} />
                        </div>
                        <div className="item-slide">
                            <Card img={"/img/maceio-card-img.png"} title={"Maceió-AL"} description={" Com praias de areias brancas e águas cristalinas, Maceió é um convite ao relaxamento e à contemplação."} /> 
                        </div>  
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="package" id="pacotes">
                <div className="title-container">
                    <img src="/icons/icon-package.png" alt="" />
                    <h2>Nossos Pacotes</h2>
                </div>
                
                <div className="card-container">
                    <Plans title="Standard" passage={true} transport={false} ride={false} hosting={false} />
                    <Plans title="Prime" passage={true} transport={true} ride={false} hosting={false} />
                    <Plans title="Master" passage={true} transport={true} ride={true} hosting={false} />
                    <Plans title="Premium" passage={true} transport={true} ride={true} hosting={true} />
                </div>
            </section>

            <section className="contact" id="contato" >
                <form action="" className="form">
                    <div className="title-container">
                        <img src="/icons/Contact.png" alt="" />
                        <h2>Contato</h2>
                    </div>
                    <div className="input-group">
                        <div className="input-div">
                            <label htmlFor="">Nome</label>
                            <input placeholder="Digite o seu nome..." type="text" />
                        </div>
                        <div className="input-div">
                            <label htmlFor="">Email</label>
                            <input placeholder="Digite o seu e-mail..." type="text" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-div">
                            <label htmlFor="">Telefone</label>
                            <input placeholder="Digite o seu telefone..." type="text" />
                        </div>
                        <div className="input-div">
                            <label htmlFor="">Cidade</label>
                            <input placeholder="Digite a sua cidade..." type="text" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-div">
                            <label htmlFor="">Assunto</label>
                            <textarea placeholder="Digite aqui o seu assunto..." name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>

                <img src="/img/Asian.png" alt="" />
            </section>
        </Layout>
    )
}