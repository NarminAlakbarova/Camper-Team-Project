import React from "react";
import card1 from "../../assets/img/newsAndBlog/news1.jpg";
import card2 from "../../assets/img/newsAndBlog/news2.jpg";
import card3 from "../../assets/img/newsAndBlog/news3.jpeg";

const DetailCards = () => {
  return (
    <>
      <div id="detail-cards">
        <div className="container">
          <div className="detail-cards">
            <div className="row">
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6 my-2">
                <img src={card1} alt="" />
              </div>
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6 my-2 ">
                <img src={card2} alt="" />
              </div>
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6 my-2">
                <img src={card3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="news-info">
        <div className="container news-container">
          <div className="news-info">
            <h4>Enjoying the beauty of nature</h4>
            <p>
              Camping is an opportunity to escape the hustle and bustle of daily
              life and immerse yourself in the beauty of nature. As John Muir
              said, “In every walk with nature one receives far more than he
              seeks.” Take time to explore the area around your campsite,
              whether that’s by hiking, fishing, or simply sitting and enjoying
              the view. And be sure to pack a camera or a sketchbook to capture
              the memories of your camping tour.
            </p>
            <p>
              Overall, camping tour is an excellent way to experience the beauty
              and tranquility of the wilderness. With the right gear, safety
              precautions and a spirit of adventure, you’ll be sure to have an
              enjoyable and memorable camping experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCards;
