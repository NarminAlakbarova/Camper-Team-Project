import React from "react";
import articlesImg from "../assets/img/newsAndBlog/news1.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const BlogArticlesCard = () => {
  return (
    <>
    
    <div className="card articles-card">
      <div className="img">
        <img src={articlesImg} alt="" />
      </div>
      <div className="articles-content">
        <p>Tips for a Safe and Enjoyable Tour</p>
        <div className="date-author">
          <div className="date">
            <AiOutlineClockCircle />
            <p>MARCH 10, 2023</p>
          </div>
          <div className="author">
            <HiOutlineDocumentText />
            <p>JANE SMITH</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card articles-card">
      <div className="img">
        <img src={articlesImg} alt="" />
      </div>
      <div className="articles-content">
        <p>Tips for a Safe and Enjoyable Tour</p>
        <div className="date-author">
          <div className="date">
            <AiOutlineClockCircle />
            <p>MARCH 10, 2023</p>
          </div>
          <div className="author">
            <HiOutlineDocumentText />
            <p>JANE SMITH</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card articles-card">
      <div className="img">
        <img src={articlesImg} alt="" />
      </div>
      <div className="articles-content">
        <p>Tips for a Safe and Enjoyable Tour</p>
        <div className="date-author">
          <div className="date">
            <AiOutlineClockCircle />
            <p>MARCH 10, 2023</p>
          </div>
          <div className="author">
            <HiOutlineDocumentText />
            <p>JANE SMITH</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
   
  );
};

export default BlogArticlesCard;
