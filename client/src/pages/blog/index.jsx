import React, { useEffect } from "react";
import "./index.scss";
import HeroBanner from "../../sections/blogSections/HeroBanner";
import BlogContent from "../../sections/blogSections/BlogContent";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";
import { getToursData } from "../../redux/toursDataSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
    dispatch(getToursData())
  }, [dispatch]);
  return (
    <>
      <HeroBanner />
      <BlogContent />
    </>
  );
};

export default BlogPage;
