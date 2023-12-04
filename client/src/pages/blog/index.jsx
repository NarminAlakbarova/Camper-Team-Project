import React, { useEffect } from "react";
import "./index.scss";
import HeroBanner from "../../sections/blogSections/HeroBanner";
import BlogContent from "../../sections/blogSections/BlogContent";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";
import { getToursData } from "../../redux/toursDataSlice";
import CustomHelmet from "../../components/CustomHelmet";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
    dispatch(getToursData());
  }, [dispatch]);
  return (
    <>
      <CustomHelmet
        title={"Blog Page - Camper"}
        description={
          "Explore our latest travel blogs covering various destinations, travel tips, and exciting adventures. Get inspired for your next journey!"
        }
      />

      <HeroBanner />
      <BlogContent />
    </>
  );
};

export default BlogPage;
