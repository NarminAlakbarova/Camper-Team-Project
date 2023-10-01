import React from "react";
const HeroBanner = ({ detailsItem }) => {
  return (
    <>
      <div id="hero-banner-details">
        <div className="container">
          <div className="hero-banner-details">
            <h1 className="text-center">{detailsItem?.newsTitle}</h1>
            <p>
              {`${detailsItem?.releaseDay} / ${detailsItem?.author?.authorName} /Blog, News `}
            </p>
          </div>
        </div>
      </div>
      <div className="details-img">
        <div className="container d-flex justify-content-center">
          <img src={detailsItem?.newsImg} alt="" />
        </div>
      </div>
      <div id="news-info">
        <div className="container news-container">
          <div className="news-info">
            <h4>Essential gear for camping tours</h4>
            <p>{detailsItem?.newsContent}</p>
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
