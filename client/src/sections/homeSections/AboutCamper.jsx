import React from "react";
import image1 from "../../assets/img/homePage/w1.jpg"
import image2 from "../../assets/img/homePage/map.png"
import image3 from "../../assets/img/homePage/wave-bg\ \(1\).jpg"
const AboutCamper = () => {
  return (
    <div id="about-camper">
      <div className="container">
        <div className="about-camper">
          <div className=" camper-img">
            <div className=" left-content ">
                <img src={image3} alt="" />
            </div>
            <div className=" right-content">
              <h2>
                Camper is the best way to find camping tours. Let’s make the
                most memorable adventures.
              </h2>
              <p>
                Camper Tour is an incredible way to have an adventurous outdoor
                experience of world renowned national parks and wilderness
                destinations while hiking with only a light daypack and sleeping
                soundly in comfortable, vehicle-accessible camps.
              </p>
              <div className="count-info">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card">
                      <img src={image1} alt="" />
                      <h1>1980</h1>
                      <h5>The First Trip We Operated</h5>
                      <p>We are in this industries for more than 40 year!</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card">
                      <img src={image2} alt="" />
                      <h1>1980</h1>
                      <h5>The First Trip We Operated</h5>
                      <p>We are in this industries for more than 40 year!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCamper;
