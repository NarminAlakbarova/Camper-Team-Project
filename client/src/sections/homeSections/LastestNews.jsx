import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LastestNewsCards from "../../components/LastestNewsCards";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/allDataSlice";

const LastestNews = () => {
  const lastestNews = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("newsCamper"));
    console.log(lastestNews);
  }, [dispatch]);
  console.log(lastestNews);

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
              {lastestNews.map(
                (news, index) => (
                  console.log(news.newsImg.img1),
                  (
                    <LastestNewsCards
                      key={index}
                      newsimg={news.newsImg.img1}
                      newsdate={`${news.releaseDay}•${news.author.authorName}`}
                      newtitle={news.newsTitle}
                    />
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
