import React from "react";
import bg from "../../assets/img/newsAndBlog/news1.jpg";
const HeroBanner = () => {
  return (
    <>
      <div id="hero-banner-details">
        <div className="container">
          <div className="hero-banner-details">
            <h1 className="text-center">A Tour of the Best High Altitude Campsites</h1>
            <p>March 10, 2023 / Jane Smith / Blog, News</p>
          </div>
        </div>
      </div>
      <div className="details-img">
        <div className="container d-flex justify-content-center">
          <img src={bg} alt="" />
        </div>
      </div>
      <div id="news-info">
        <div className="container news-container">
          <div className="news-info">
            <h4>Essential gear for camping tours</h4>
            <p>
              When planning your camping tour, it’s important to make sure you
              have all the necessary gear. This includes a tent, sleeping bag,
              and camping stove, as well as a flashlight or headlamp, a camping
              chair, and a cooler to keep your food and drinks cold. You should
              also bring plenty of warm clothes and waterproof gear, as well as
              a first aid kit in case of emergencies. Additionally, it’s
              important to have proper footwear and a backpack to carry your
              gear. When it comes to camping, safety should always be a top
              priority. Before you set out on your camping tour, make sure you
              are familiar with the area and the weather conditions.
            </p>
            <div className="important-info">
              <p>
                Camping is an opportunity to escape the hustle and bustle of
                daily life and immerse yourself in the beauty of nature.
              </p>
            </div>
            <p>
              Always let someone know where you are going and when you expect to
              return. And when you’re on the trail, always be aware of your
              surroundings and stay on designated paths to avoid getting lost.
              Additionally, it’s important to respect the environment by not
              littering and not disturbing wildlife.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
