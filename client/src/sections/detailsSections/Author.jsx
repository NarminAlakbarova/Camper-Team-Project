import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import authorImg from "../../assets/img/newsAndBlog/author/author1.jpeg";
import { Link } from "react-router-dom";
const Author = () => {
  return (
    <div id="author">
      <div className="container">
        <div className="author">
          <div className="heading">
            <p>
              <span>0</span>Shares
            </p>
            <div className="line"></div>
            <div className="icons">
              <BiLogoFacebook />
              <BiLogoPinterestAlt />
              <AiOutlineTwitter />
            </div>
          </div>
          <div className="author-content">
            <div className="author-img">
              <img src={authorImg} alt="" />
            </div>
            <div className="author-info">
              <p className="title">About the author</p>
              <h3>Jane Smith</h3>
              <p className="info">
                There is no better way to learn about the Napa Valley and all it
                has to offer than on a guided tour. There is something for
                everyone – whether you are looking to drink.
              </p>
            </div>
          </div>
          <div id="prev-next">
            <Link >
              <GrLinkPrevious  />
              Prev
            </Link>
            <Link>
              Next
              <GrLinkNext />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
