import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LastestNews = () => {
  const lastestNews = useSelector((state) => state.newsData.data);
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
              {lastestNews.slice(1, 4).map((news) => (
             <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 my-2" key={news.id}>
             <div className="card">
               <div className="card-img">
                 <img src={news.newsImg} alt="" />
                 <div className="overlay"></div>
               </div>
               <div className="card-content">
                 <p>{news.releaseDay}</p>
                <div className="title-link">
                <Link to={`details/${news.id}`} className="title">{news.newsTitle}</Link>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="arrow"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                   />
                 </svg>
                </div>
       
                 <div className="tags">
                   <Link>Camping</Link>
                   <Link>Travel</Link>
                 </div>
               </div>
             </div>
           </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
