import React from "react";
import g1 from "../../assets/img/homePage/g1.png";
import g2 from "../../assets/img/homePage/g2.png";
import g3 from "../../assets/img/homePage/g3.png";
import g4 from "../../assets/img/homePage/g4.png";
import g5 from "../../assets/img/homePage/g5.png";

const GalleryHome = () => {
  return (
    <div id="gallery-home">
      <div className="container">
        <div className="gallery-home ">
          <div className="img-div">
            <img src={g1} alt="gallery home image" />
          </div>
          <div className="img-div">
            <img src={g2} alt="gallery home image" />
          </div>
          <div className="img-div">
            <img src={g3} alt="gallery home image" />
          </div>
          <div className="img-div">
            <img src={g4} alt="gallery home image" />
          </div>
          <div className="img-div">
            <img src={g5} alt="gallery home image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
