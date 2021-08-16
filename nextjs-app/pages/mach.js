import Link from "next/link";
import Router from "next/router";

import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ProducCall from "./shared/Benefits";
import Download from "./shared/Download";
import Benefits from "./shared/Benefits";
import Register from "./shared/Register";

class Mach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [
        {
          "title": "Nuevos usuarios en Coco", 
          "description": "Registrándote en Coco con el código de invitación COCOMACH, recibirás $5.000 CLP de regalo para tu primera compra.",
          "disclaimer": "*Promoción válida solo en compras superiores a $16.000 CLP ($20 USD).", 
          "link":"https://www.cocomercado.com/landing-referido?referral_token=COCOMACH", 
          "color":"green-bg",
          "button":"Descargar COCO"},
        {
          "title": "Nuevos usuarios en MACH", 
          "description": "Registrándote en MACH y pagando en Coco con la tarjeta virtual prepago, recibirás una recompensa de $5.000 CLP en tu cuenta MACH.", 
          "disclaimer": "*Promoción válida solo en compras de Coco superiores a $16.000 CLP ($20 USD).", 
          "color":"purple-bg",
          "link": "https://bajamach.com/Cocos", 
          "button": "Descarga MACH"}
      ],
      link:["https://www.cocomercado.com/landing-referido?referral_token=COCOMACH"]
    };
  }

  render() {
    return (
      <>
      <Head>
        <meta name="description" content="Desde Coco nos aliamos con MACH para ayudarte a cuidar de tu familia en Venezuela 🚚🇻🇪" />
        <meta property="og:title" content="Coco Mercado - MACH" key="ogtitle" />
        <meta property="og:description" content="Desde Coco nos aliamos con MACH para ayudarte a cuidar de tu familia en Venezuela 🚚🇻🇪" />
        <meta property="og:image" content="https://aliados.cocomercado.com/images/mach.png" key="ogimage" />
        <meta property="og:url" content="https://aliados.cocomercado.com/mach" key="ogurl" />
        <title>Coco Mercado - MACH</title>
      </Head>
      <div>
        <Header page="mach" link={this.state.link}/>

        <header>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active mach-bg">
              <div className="carousel-caption d-md-block">
                <h3 className="intro-line font-bold">Unidos para cuidar</h3>
                <h3 className="intro-line font-bold">de tu familia en Venezuela</h3>
                <button className="intro-button"><a href={this.state.link}>¡Regístrate ahora! </a></button>
              </div>
            </div>
          </div>
        </header>
        <section className="app-section text-center">
          <div className="container col-md-8 col-lg-6">
            <h3>GANA hasta $10.000 CLP <br />Registrándote en MACH y en Coco</h3>
            <p>Al registrarte en MACH y la app de Coco, recibirás hasta $10.000 CLP de regalo ($5.000 para compras desde la App de Coco y $5.000 de recompensa en MACH).</p>
          </div>          
        </section>
        <Benefits lines={this.state.lines} link={this.state.link}></Benefits> 

        <Register page_txt="¿Qué esperas? Comienza YA a enviar bienestar a tus seres queridos en Venezuela" link={this.state.link}></Register>

        <section className="app-section text-center bg-fafafa">
          <div className="container">
            <div className="row">
              <div className="help col-12 font-normal">
                <h3>¿Necesitas ayuda?</h3>
                <p>Si necesitas ayuda sobre el servicio Coco o con tu código de invitación,<br /> Escríbenos al chat de <a className="green-color" href="https://cocomercado.com">Cocomercado</a> o al <a className="green-color" href="https://wa.me/15616772626" target="_blank">Whatsapp.</a></p>
                <p>Si necesitas ayuda con el beneficio MACH, escríbenos en <a className="purple-color" href="https://ayuda.somosmach.com">ayuda.somosmach.com</a></p>
                <p><a className="green-color" href="https://luminous-resistance-7d7.notion.site/T-rminos-y-condiciones-Alianza-Coco-y-MACH-1bdc157d64ba4da395a6f8ee58d6877b" target="_blank">*Términos y condiciones</a></p>
              </div>
            </div>
          </div>
        </section>

        {/*<Download></Download>*/}

        <Footer />
      </div>
      </>
    );
  }
}

export default Mach;
