import React from "react";


class ProducCall extends React.Component {
  render() {
    return (
      <section className="app-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-call-head">¿Cómo funciona?</div>

              {this.props.lines.map((data) => {
                return (
                  <div className="product-call-text">
                    <p>
                      <img src="images/tick_copia.png" alt=""/>
                      {data}
                    </p>
                  </div>
                );
              })}
              <button className="product-register-button font-bold"><a href={this.props.link}>¡Regístrate ahora! </a></button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProducCall;
