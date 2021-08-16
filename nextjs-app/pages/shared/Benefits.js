import React from "react";


class Benefits extends React.Component {
  render() {
    return (
      <section className="app-section text-center">
        <div className="container col-md-8 col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="product-call-head">¿Cómo funciona?</div>

              {this.props.lines &&
                this.props.lines.map((data,index) => {

                  return (
                    <div className="product-call-text">
                      <h3>{data.title}</h3>
                      <p>
                        {data.description}
                      </p>
                      <span className="disclaimer">{data.disclaimer}</span>
                      <button className={data.color}><a href={data.link}target="_blank">{data.button}</a></button>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Benefits;
