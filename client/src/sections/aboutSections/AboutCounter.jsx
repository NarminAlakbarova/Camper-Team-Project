import React from "react";
import cameraImg from "../../assets/img/about/camera.png";
import compassImg from "../../assets/img/about/compass.png";
import viewImg from "../../assets/img/about/view.png";
import luggageImg from "../../assets/img/about/luggage.png";

const AboutCounter = () => {
  return (
    <div id="about-counter">
      <div className="about-counter">
        <div className="row">
          <div className="col-xl-3 col-md-4">
            <div className="card">
              <div className="img">
                <img src={cameraImg} alt="" />
              </div>
              <div className="content">
                <h4>500+</h4>
                <p>Locations</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="card">
              <div className="img">
                <img src={luggageImg} alt="" />
              </div>
              <div className="content">
                <h4>500+</h4>
                <p>Locations</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="card">
              <div className="img">
                <img src={compassImg} alt="" />
              </div>
              <div className="content">
                <h4>500+</h4>
                <p>Locations</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="card">
              <div className="img">
                <img src={viewImg} alt="" />
              </div>
              <div className="content">
                <h4>500+</h4>
                <p>Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
