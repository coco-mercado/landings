import Link from "next/link";
import Router from "next/router";

import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ProducCall from "./shared/ProducCall";
import Download from "./shared/Download";
import Register from "./shared/Register";

class Productores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: ["Vende tus productos en las tiendas aliadas de Coco"],link:["https://cocomarket.typeform.com/to/RwIqOV"]
    };
  }

  render() {
    return (
      <div>
        <Header page="productores" link={this.state.link}/>

        <header>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active productores-bg">
              <div className="carousel-caption d-md-block">

                <h3 className="intro-line font-bold">¡Vende tus</h3>
                <h3 className="intro-line font-bold">
                  productos en Coco!</h3>
                <p className="intro-text font-light">
                  Amplía tus ventas
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
                  <img src="images/vende.png" alt="" />
                  <h1 className="card-title pricing-card-title">VENDE</h1>
                  <div className="detail">
                    Ingresos que no se devalúan.
                    Vende tus productos en
                    <span> DÓLARES.</span>
                  </div>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <img src="images/Crece.png" alt="" />
                  <h1 className="card-title pricing-card-title">Crece</h1>
                  <div className="detail">
                    Llega a muchísimas más
                    personas y amplía tu
                    <span> CARTERA DE CLIENTES.</span>
                  </div>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <img src="images/Prestigio.png" alt="" />
                  <h1 className="card-title pricing-card-title">Posiciónate</h1>
                  <div className="detail">
                    Trabaja en el reconocimiento
                    de tu marca. Tus productos en una
                    plataforma nacional con
                    <span> estándares Internacionales.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProducCall lines={this.state.lines} link={this.state.link}></ProducCall>

        <Register page_txt="Quiero ser Productor para Coco" link={this.state.link}></Register>


        <Footer />
      </div>
    );
  }
}

export default Productores;
