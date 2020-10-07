import Link from "next/link";
import Router from "next/router";

import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ProducCall from "./shared/ProducCall";
import Download from "./shared/Download";
import Register from "./shared/Register";

class Tiendas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: [
                "Vende 24/7",
                "Cobra en dólares el total de las ventas realizadas en la semana",
                "Controla tu stock digitalmente"
            ],link:["https://cocomarket.typeform.com/to/D7DZAb"]
        };
    }



    render() {
        return (
            <>
        <Head>
        <meta name="description" content="Abre tu tienda online en Coco Mercado y genera ingresos que no se devalúen. ¡Únete ya a nuestra red de aliados comerciales!" />
        <meta property="og:title" content="Coco Mercado - Aliados Comerciales" key="ogtitle" />
        <meta property="og:description" content="Abre tu tienda online en Coco Mercado y genera ingresos que no se devalúen. ¡Únete ya a nuestra red de aliados comerciales!" />
        <meta property="og:image" content="https://aliados.cocomercado.com/images/123.png" key="ogimage" />
        <meta property="og:url" content="https://aliados.cocomercado.com/tiendas" key="ogurl" />
        <title>Coco Mercado - Aliados Comerciales</title>
      </Head>
            <div>
                <Header page="tiendas" link={this.state.link}/>

                <header>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active merchant-bg">
                            <div className="carousel-caption d-md-block">
                                <h3 className="intro-line font-bold">¡Abre tu tienda</h3>
                                <h3 className="intro-line font-bold">online en Coco!</h3>
                                <p className="intro-text">
                                    Amplía tus ventas en <span>Venezuela </span>y el mundo
                                </p>
                                <button className="intro-button"><a href={this.state.link}>¡Regístrate ahora! </a></button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5 app-section details-box">
                    <div className="container">
                        <div className="card-deck text-center">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <img src="images/vende.png" alt=""/>
                                    <h1 className="card-title pricing-card-title">VENDE</h1>
                                    <div className="detail">
                                        Ingresos que no se devalúan. Vende tus productos
                                        <span> en dólares</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <img src="images/Crece.png" alt=""/>
                                    <h1 className="card-title pricing-card-title">Crece</h1>
                                    <div className="detail">
                                        Llega a muchísimas más personas y amplía tu
                                        <span> cartera de clientes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <img src="images/Prestigio.png" alt=""/>
                                    <h1 className="card-title pricing-card-title">Posiciónate</h1>
                                    <div className="detail">
                                        Tus productos en una
                                        plataforma nacional con
                                        <span> estándares Internacionales.</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ProducCall lines={this.state.lines} link={this.state.link}></ProducCall>

                <section className="app-section text-center bg-fafafa">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 logos-images">
                                <img src="images/delicatek.png" alt=""/>
                                <img src="images/divinsuma.png" alt=""/>
                                <img src="images/lomas-logo.png" alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <img className="quote-icon" src="images/commaR.png" alt=""/>
                            </div>
                            <div className="col-8">
                                <i>
                                    <p>
                                        Desde el primer momento supimos que era un gran desafío, sin
                                        embargo, fuimos el{" "}
                                        <b>primer aliado de Coco en el interior del país</b>y eso
                                        significó un crecimiento paulatino para ambos que hoy en día
                                        se traduce en <b>mucha satisfacción...</b>
                                    </p>
                                </i>
                                <i>
                                    <p>
                                        Servir a la familia zuliana brindándoles un buen servicio,
                                        tranquilidad, confianza y productos de calidad".
                                    </p>
                                </i>

                                <i>
                                    <b>
                                        <p className="oscar">Andreína Medina, Gerente Divinsuma.</p>
                                    </b>
                                </i>
                            </div>

                            <div className="col-2">
                                <img className="quote-icon" src="images/commaL.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <Register page_txt="Quiero abrir mi tienda online en Coco" link={this.state.link}></Register>

                {/*<Download></Download>*/}

                <Footer/>
            </div>
            </>
        );
    }
}

export default Tiendas;
