import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="app-section text-center app-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-icons d-flex justify_content_center">
              <a href="https://www.facebook.com/coconectado">
                <button className="social_link">
                  <i class="fa fa-facebook f-18 socials"></i>
                </button>
                </a>
                <a href="https://www.instagram.com/coconecta/">
                  <button className="social_link">
                    <i class="fa fa-instagram f-20 socials"></i>
                  </button>
                </a>
                {/* <img src="images/facebook.png" alt="" />
                <img src="images/instagram.png" alt="" /> */}
              </div>
              <div className="footer-owner">Preguntas Frecuentes</div>

              <div className="footer-underline"></div>

              <div className="footer-text">
                <div>© 2020 Coco Mercado</div>
                <div>2135 California st, San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
