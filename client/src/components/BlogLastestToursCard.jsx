import React from "react";
import lastestImg1 from "../assets/img/newsAndBlog/news1.jpg";
import { useSelector } from "react-redux";

const BlogLastestToursCard = () => {
  const lastestTours = useSelector((state) => state.toursData.data);
  console.log(lastestTours.slice(0, 4));
  return (
    <div id="latest-tours">
      <h5>Latest Tours</h5>
      {lastestTours.slice(0, 4).map((item) => (
        <div className="card lastest-card">
          <div className="img">
            <img src={item?.tourImg[0]} alt="" />
          </div>
          <div className="lastest-card-content">
            <p className="tours-name">{item.tourTitle}</p>
            <p className="tours-price">
              From{" "}
              {item.tourPrevPrice && (
                <span className="tour-prev-price">${item.tourPrevPrice}</span>
              )}
              <span className="tour-price"> ${item?.tourPriceUSD}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogLastestToursCard;
