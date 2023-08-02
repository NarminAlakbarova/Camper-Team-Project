import React from "react";
import { Link } from "react-router-dom";
import newsimg1 from "../../assets/img/homePage/lucija-ros-538672-unsplash-700x500.jpg";
import newsimg2 from "../../assets/img/homePage/pexels-photo-739365-700x500.jpeg";
import newsimg3 from "../../assets/img/homePage/anastasia-petrova-193818-unsplash-700x500.jpg";
import LastestNewsCards from "../../components/LastestNewsCards";

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
              <LastestNewsCards
                newsimg={newsimg1}
                newsdate={"March 10, 2023 • Jane Smith"}
                newtitle={"Tips for a Safe and Enjoyable Tour"}
              />
              <LastestNewsCards
                newsimg={newsimg2}
                newsdate={"March 10, 2023 • Jane Smith"}
                newtitle={"Tips for a Safe and Enjoyable Tour"}
              />
              <LastestNewsCards
                newsimg={newsimg3}
                newsdate={"March 10, 2023 • Jane Smith"}
                newtitle={"Tips for a Safe and Enjoyable Tour"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
