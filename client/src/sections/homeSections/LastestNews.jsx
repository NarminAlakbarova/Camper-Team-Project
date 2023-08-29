import React from "react";
import { Link } from "react-router-dom";
import LastestNewsCards from "../../components/LastestNewsCards";
import { useSelector } from "react-redux";

const LastestNews = () => {
  const lastestNews=useSelector(state=>state.newsData.data)
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
              {lastestNews.map((news, index) => (
                console.log(news.newsImg),
                <LastestNewsCards
                  key={index}
                  newsimg={news.newsImg}
                  newsdate={`${news.releaseDay}•${news.author?.authorName}`}
                  newtitle={news.newsTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
