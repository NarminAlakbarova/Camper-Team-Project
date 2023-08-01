import React from "react";
import { Link } from "react-router-dom";
import newsimg1 from "../../assets/img/homePage/lucija-ros-538672-unsplash-700x500.jpg";
import newsimg2 from "../../assets/img/homePage/pexels-photo-739365-700x500.jpeg";
import newsimg3 from "../../assets/img/homePage/anastasia-petrova-193818-unsplash-700x500.jpg";

const LastestNews = () => {
  return (
    <div id="lastest-news">
      <div className="container">
        <div className="lastest-news">
          <div className="news-heading">
            <h3>Get the Latest News</h3>
            <Link to="/allTours">View All Tours</Link>
          </div>
          <div className="news-content">
            <div className="row">
              <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="card">
                  <div className="card-img">
                    <img src={newsimg1} alt="" />
                  </div>
                  <div className="card-content">
                    <p>March 10, 2023 • Jane Smith</p>
                    <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
                    <div className="tags">
                      <Link>Camping</Link>
                      <Link>Travel</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="card">
                  <div className="card-img">
                    <img src={newsimg2} alt="" />
                  </div>
                  <div className="card-content">
                    <p>March 10, 2023 • Jane Smith</p>
                    <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
                    <div className="tags">
                      <Link>Camping</Link>
                      <Link>Travel</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="card">
                  <div className="card-img">
                    <img src={newsimg3} alt="" />
                  </div>
                  <div className="card-content">
                    <p>March 10, 2023 • Jane Smith</p>
                    <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
                    <div className="tags">
                      <Link>Camping</Link>
                      <Link>Travel</Link>
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

export default LastestNews;
