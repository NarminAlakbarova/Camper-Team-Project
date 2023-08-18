import React from "react";
import locationImg1 from "../../assets/img/contact/locationImg1.jpg";
import locationImg2 from "../../assets/img/contact/locationImg2.jpg";

const Location = () => {
  return (
    <div id="location">
      <div className="location">
        <div className="location-card">
          <div className="img">
            <img src={locationImg1} alt="" />
            <div className="overlay">
              <h3>London</h3>

              <p>
                4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
              </p>
              <div className="adress-info">
                <p>Tel : +44-20-2355-3456</p>
                <p>Email : London@InfiniteWP.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="location-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18878260.622820545!2d39.22144715378151!3d44.54321324720923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1691612489236!5m2!1sen!2saz"
            width="350"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
        <div className="location-card">
          <div className="img">
            <img src={locationImg2} alt="" />
            <div className="overlay">
              <h3>San Fran</h3>

              <p>88 Flower Avenue. Kingdom St. San Francisco CA 7689</p>
              <div className="adress-info">
                <p>Tel : +44-20-2355-3456</p>
                <p>Email : London@InfiniteWP.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location-card">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18878260.622820545!2d39.22144715378151!3d44.54321324720923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1691612489236!5m2!1sen!2saz"
          
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
