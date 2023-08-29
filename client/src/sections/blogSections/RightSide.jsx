import React from "react";
import BlogLastestToursCard from "../../components/BlogLastestToursCard";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegLifeRing } from "react-icons/fa";
import BlogArticlesCard from "../../components/BlogArticlesCard";
const RightSide = () => {
  return (
    <>
      <BlogLastestToursCard />
      <div id="confidence">
        <h5>Book With Confidence</h5>
        <div className="confidence-content">
          <div className="conf-group">
            <AiOutlineLike className="icon" />
            <p>No-hassle best price guarantee</p>
          </div>
          <div className="conf-group">
            <AiOutlinePhone className="icon"/>
            <p>Customer care available 24/7</p>
          </div>
          <div className="conf-group">
            <AiOutlineStar className="icon"/>
            <p>Hand-picked Tours & Activities</p>
          </div>
          <div className="conf-group">
            <FaRegLifeRing className="icon" />
            <p>Free Travel Insureance</p>
          </div>
        </div>
      </div>

      <div id='articles'>
      <h5>Recent Articles</h5>
      <BlogArticlesCard/>
    </div>
    </>
  );
};

export default RightSide;
