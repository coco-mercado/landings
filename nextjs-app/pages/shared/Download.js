import React from "react";


class Download extends React.Component {
  render() {
    return (
      <section className="app-section text-center">
        <div className="container">
          <div className="width_100per">
            <div className="width_100per">
              <div className="download-text">Descarga la App</div>
              <div className="download-images respo_d-flex">
                <img src="images/App_Store.png" alt=""/>
                <img src="images/Google_Play.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
