import React from "react";


class Register extends React.Component {
  componentDidMount() {
  }
  // link(){
  //     if
  // }
  render() {
    return (
      <section className="app-section text-center app-register">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div className="register-text font-bold">
                  {this.props.page_txt}
                </div>
              <button className="register-button"><a href={this.props.link}>Regístrate ya</a></button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
