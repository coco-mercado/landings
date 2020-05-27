import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: true,
    };
  }


  setResponsive(e) {
    this.state.responsive = e;
    this.setState({
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <head>
          <title>Coco</title>
            <link rel="shortcut icon" href="../../public/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>

        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top app-header-back">
          <div className="header_text_div">
            <div>
              <a className="navbar-brand" href="/#">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#">
                    Inicio
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Inicia Sesión
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <div className="app-header-button">¡Regístrate ya!</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
     
     <nav
        className={
          this.state.responsive 
            ? "navbar navbar-expand-lg navbar-dark fixed-top app-header-back"
            : "navbar navbar-expand-lg navbar-dark fixed-top app-header-back-respo"
        }
      >
        <div className="header_text_div">
          {this.state.responsive ? (
            <div>
              <a className="navbar-brand" href="/#">
                {/* <img src={require("../../public/images/logo.png")} alt="" /> */}
                <img src="images/logo.png" alt="" />
              </a>
            </div>
          ) : (
            <div></div>
          )}
          {this.props.page === "landing" ? (
            <ul className="dis-none navbar-nav ml-auto">
              <li className="nav-item active dis-none">
                <a className="nav-link font-poppins" href="/#">
                  Inicia sesión
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          ) : this.state.responsive ? (
            <button
              onClick={() => this.setResponsive(false)}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          ) : (
            <div>
              <button
                onClick={() => this.setResponsive(true)}
                className="cross_respo"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <img src={require("../../public/images/close_circle.png")} alt="" /> */}
                <img src="images/close_circle.png" alt="" />
              </button>
            </div>
          )}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {this.props.page === "landing" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link font-poppins" href="https://merchant.cocomercado.com/login">
                    Inicia sesión
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            ) : this.state.responsive ? (
              <ul className="navbar-nav ml-auto">
                {/*<li className="nav-item active">*/}
                {/*  <a className="nav-link font-poppins" href="/#">*/}
                {/*    Inicio*/}
                {/*    <span className="sr-only">(current)</span>*/}
                {/*  </a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*  <a className="nav-link font-poppins active" href="/#">*/}
                {/*    Blog*/}
                {/*  </a>*/}
                {/*</li>*/}
                <li className="nav-item">
                  <a className="nav-link" href={this.props.link}>
                    <div className="app-header-button font-bold" >¡Regístrate ya!</div>
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto mt-6em ">
                <li className="nav-item">
                  <a className=" nav-green font-poppins" href={this.props.link}>
                    ¡Regístrate ya!
                  </a>
                </li>
                <hr className="hr-respo" />
                {/*<li className="nav-item active">*/}
                {/*  <a className=" nav-white font-bold" href="/#">*/}
                {/*    Inicio*/}
                {/*    <span className="sr-only">(current)</span>*/}
                {/*  </a>*/}
                {/*</li>*/}
                <hr className="hr-respo" />
                <li className="nav-item">
                  <a className=" nav-white font-poppins" href="/#">
                    Blog
                  </a>
                </li>
                <hr className="hr-respo" />
                <li className="nav-item">
                  <a className=" nav-white font-poppins" href="/#">
                    Inicia Sesión
                  </a>
                </li>
                <hr className="hr-respo" />
              </ul>
            )}
          </div>
        </div>
      </nav>
     
     
     
      </div>
    );
  }
}

export default Header;
