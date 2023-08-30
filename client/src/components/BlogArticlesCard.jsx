import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";

const BlogArticlesCard = () => {
  const recentArticleData=useSelector(state=>state.newsData.data)
  return (
    <>
    {
      recentArticleData.slice(0,3).map(item=>(
        <div className="card articles-card" key={item.id}>
        <div className="img">
          <img src={item.newsImg} alt="" />
        </div>
        <div className="articles-content">
          <p>{item.newsTitle}</p>
          <div className="date-author">
            <div className="date">
              <AiOutlineClockCircle />
              <p>{item.releaseDay}</p>
            </div>
            <div className="author">
              <HiOutlineDocumentText />
              <p>{item.author.authorName}</p>
            </div>
          </div>
        </div>
      </div>
      ))
    }


    
    </>
   
  );
};

export default BlogArticlesCard;
