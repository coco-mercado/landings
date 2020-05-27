import Link from "next/link";
import Router from "next/router";

import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Download from "./shared/Download";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    goto(e) {
        Router.push("/" + e);
    }

    render() {
        return (
            <div>
                <Header page="landing"/>

                <header>
                    <div className="carousel-inner" role="listbox">
                        <div className="kenburns-bottom-left carousel-item-landing active landing-bg">
                            <div
                                className="call-to carousel-caption-landing  carousel-caption  d-md-block carousel-caption-landing-override"
                            >
                                <h3 className="font-bold intro-line">¡Sé parte del </h3>
                                <h3 className="font-bold intro-line">equipo Coco Mercado!</h3>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="app-section details-box landing-height">
                    <div className="container half_screen respo_width">
                        <div className="container">
                            <div className="cards-custom">

                                <div className="  card-deck text-center">
                                    <div  onClick={() => this.goto("merchant")} className="bounce-top card mb-4 shadow-sm">
                                        <div className="font-normal card-body">
                                            <img src="images/Aliados.png" alt=""/>
                                            <h1 className="card-title pricing-card-title">Aliado</h1>
                                            <div className="detail">
                                                Abre tu tienda online<br/>
                                                <span>GRATIS</span>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <button
                                                onClick={() => this.goto("merchant")}
                                                className="landing_btn paper-raise"
                                            >
                                                ¡Regístrate!
                                            </button>
                                        </div>
                                    </div>

                                    <div  onClick={() => this.goto("productores")} className="bounce-top card mb-4 shadow-sm">
                                        <div className="card-body">
                                            <img src="images/Productor.png" alt=""/>
                                            <h1 className="font-bold card-title pricing-card-title">
                                                Productor
                                            </h1>
                                            <div className="detail">
                                                Vende tus productos <br/>
                                                <span>En Dólares</span>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <button
                                                className="landing_btn paper-raise"
                                            >
                                                ¡vende!
                                            </button>
                                        </div>
                                    </div>

                                    <div  onClick={() => this.goto("repartidores")} className="card bounce-top mb-4 shadow-sm">
                                        <div className="card-body">
                                            <img src="images/repartidor.png" alt=""/>
                                            <h1 className="card-title pricing-card-title">
                                                Repartidor
                                            </h1>
                                            <div className="detail">
                                                Lleva alegría a los hogares y genera ingresos
                                                <span> En Dólares </span>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <button
                                                onClick={() => this.goto("repartidores")}
                                                className="landing_btn paper-raise"
                                            >
                                                ¡Comienza!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fpcol-6 margin_auto grn_txt">
                                ¡Sé parte de este <span>comunidad de más de 200K personas</span>{" "}
                                alrededor del mundo!
                            </div>
                        </div>

                    </div>
                </section>

                <section className="app-section text-center bg-fafafa">
                    <div className="width_100per">

                    </div>
                </section>


                <Footer/>
            </div>
        );
    }
}

export default Home;
