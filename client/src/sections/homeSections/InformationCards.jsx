import React from "react";
import images1 from "../../assets/img/homePage/icon1.png";
import images2 from "../../assets/img/homePage/icon2.png";
import images3 from "../../assets/img/homePage/icon3.png";
const InformationCards = () => {
  return (
    <div id="information-cards">
      <div className="container">
        <div className="information-cards">
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                <div className="card-img">
                  <img src={images1} alt="" />
                </div>
                <div className="card-content">
                  <h4>15 Years of Experiences</h4>
                  <p>
                    Host our community of good-natured campers, glampers, and RV
                    travelers on your land or at your cabin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                <div className="card-img">
                  <img src={images2} alt="" />
                </div>
                <div className="card-content">
                  <h4>15 Years of Experiences</h4>
                  <p>
                    Host our community of good-natured campers, glampers, and RV
                    travelers on your land or at your cabin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                <div className="card-img">
                  <img src={images3} alt="" />
                </div>
                <div className="card-content">
                  <h4>15 Years of Experiences</h4>
                  <p>
                    Host our community of good-natured campers, glampers, and RV
                    travelers on your land or at your cabin.
                  </p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
