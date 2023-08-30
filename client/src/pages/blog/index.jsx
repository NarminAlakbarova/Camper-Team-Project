import React, { useEffect } from "react";
import "./index.scss";
import HeroBanner from "../../sections/blogSections/HeroBanner";
import BlogContent from "../../sections/blogSections/BlogContent";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  return (
    <>
      <HeroBanner />
      <BlogContent />
    </>
  );
};

export default BlogPage;
