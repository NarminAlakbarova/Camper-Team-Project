import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { useSelector } from "react-redux";

const LeftSide = () => {
  const blogNews = useSelector((state) => state.newsData.data);
  const itemPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const curretNews = blogNews.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogNews.length / itemPerPage);
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      {curretNews.map((news) => (
        <div
          className="card blog-card"
          style={{ border: "none", background: "transparent" }}
          key={news.id}

        >
          <div className="img">
            <img src={news.newsImg} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="blog-content">
            <p>
              {`${news.releaseDay} • ${news?.author?.authorName} • Blog, News `}
            </p>
            <Link className="title">{news.newsTitle}</Link>
            <p className="about-blog">
              {`${news.newsContent.slice(0, 300)}...`}
            </p>
            <Link to={`/details/${news.id}`} className="read-more-btn">Read More</Link>
          </div>
        </div>
      ))}

      <Pagination
        defaultCurrent={1}
        current={currentPage}
        pageSize={itemPerPage}
        onChange={handlePagination}
        total={blogNews.length}
        className="pagination"
      />
    </>
  );
}

export default LeftSide
