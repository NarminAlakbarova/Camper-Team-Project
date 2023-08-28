import React from "react";
import blogImg1 from "../assets/img/newsAndBlog/news1.jpg";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const LeftBlogCard = () => {
  return (
    <>
      <div
        className="card blog-card"
        style={{ border: "none", background: "transparent" }}
      >
        <div className="img">
          <img src={blogImg1} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="blog-content">
          <p>March 10, 2023 • Jane Smith • Blog, News • 0</p>
          <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
          <p className="about-blog">
            Essential gear for camping tours When planning your camping tour,
            it’s important to make sure you have all the necessary gear. This
            includes a tent, sleeping bag, and camping stove, as well as a
            flashlight or headlamp, a camping chair, and a cooler to keep your
            food and drinks cold. You should also bring plenty of...
          </p>
          <Link className="read-more-btn">Read More</Link>
        </div>
      </div>
      <div
        className="card blog-card"
        style={{ border: "none", background: "transparent" }}
      >
        <div className="img">
          <img src={blogImg1} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="blog-content">
          <p>March 10, 2023 • Jane Smith • Blog, News • 0</p>
          <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
          <p className="about-blog">
            Essential gear for camping tours When planning your camping tour,
            it’s important to make sure you have all the necessary gear. This
            includes a tent, sleeping bag, and camping stove, as well as a
            flashlight or headlamp, a camping chair, and a cooler to keep your
            food and drinks cold. You should also bring plenty of...
          </p>
          <Link className="read-more-btn">Read More</Link>
        </div>
      </div>
      <div
        className="card blog-card"
        style={{ border: "none", background: "transparent" }}
      >
        <div className="img">
          <img src={blogImg1} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="blog-content">
          <p>March 10, 2023 • Jane Smith • Blog, News • 0</p>
          <Link className="title">Tips for a Safe and Enjoyable Tour</Link>
          <p className="about-blog">
            Essential gear for camping tours When planning your camping tour,
            it’s important to make sure you have all the necessary gear. This
            includes a tent, sleeping bag, and camping stove, as well as a
            flashlight or headlamp, a camping chair, and a cooler to keep your
            food and drinks cold. You should also bring plenty of...
          </p>
          <Link className="read-more-btn">Read More</Link>
        </div>
      </div>
      <Pagination defaultCurrent={1} total={20} className="pagination"/>
    </>
  );
};

export default LeftBlogCard;
