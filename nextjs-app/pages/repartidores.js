import Link from "next/link";
import Router from "next/router";

import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ProducCall from "./shared/ProducCall";
import Download from "./shared/Download";
import Register from "./shared/Register";

class Repartidores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [
        "El Coco repartidor recoge el pedido en la tienda afiliada y lo lleva hasta la puerta del hogar del beneficiario. Deberá llamar antes para coordinar la entrega con el beneficiario",
        "Cobra una tarifa fija por cada reparto que entregues (Zona capital y zonas foráneas tienen distinta tarifa)",
        "Sé tu propio jefe, elige tus días y horas de trabajo"
        ,
      ],link:["https://cocomarket.typeform.com/to/X0MMGn"]
    };
  }

  render() {
    return (
      <div>
        <Header page="repartidore" link={this.state.link}/>

        <header>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active repartidores-bg">
              <div className="carousel-caption d-md-block">


                <h3 className="intro-line font-bold">¡Únete al equipo de</h3>
                <h3 className="intro-line font-bold">Coco Repartidores!</h3>
                <p className="intro-text">
                  Cobra por cada <span>entrega</span> realizada

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
                  <img src="images/board.png" alt="" />
                  <h1 className="card-title pricing-card-title">Seguridad</h1>
                  <div className="detail">
                    Ingresos que no se devalúan. Gana en dólares por cada
                    entrega que realices
                  </div>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <img src="images/lan_2_bob.png" alt="" />
                  <h1 className="card-title pricing-card-title">
                    Satisfacción
                  </h1>
                  <div className="detail">
                    El trabajo de nuestros Coco repartidores es uno de los más
                    nobles… Llevar alegría a los hogares venezolanos
                  </div>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <img src="images/lan_2_wal.png" alt="" />
                  <h1 className="card-title pricing-card-title">
                    Independencia
                  </h1>
                  <div className="detail">
                    Para trabajar en Coco necesitas un vehículo con papeles en
                    regla, un teléfono inteligente, ser mayor de 18 años y una
                    gran sonrisa.
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
              <div className="col-2">
                <img className="quote-icon" src="images/left.svg" alt="" />
              </div>
              <div className="col-8 testimonial font-normal">

                  “Mi experiencia en Coco ha sido satisfactoria. Es una empresa
                  innovadora que se ocupa tanto de sus clientes como de sus
                  empleados, siempre pendientes de entregar lo necesario para
                  que uno realice de forma adecuada su trabajo"


                <b>
                  <p className="oscar">Oscar Cumare.</p>
                </b>
              </div>

              <div className="col-2">
                <img className="quote-icon2" src="images/right.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <Register page_txt="Quiero ser Coco Repartidor" link={this.state.link}></Register>

        {/*<Download></Download>*/}

        <Footer />
      </div>
    );
  }
}

export default Repartidores;
