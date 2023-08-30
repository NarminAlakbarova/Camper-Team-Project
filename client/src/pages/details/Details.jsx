import React, { useEffect } from "react";
import "./index.scss";
import HeroBanner from "../../sections/detailsSections/HeroBanner";
import DetailCards from "../../sections/detailsSections/DetailCards";
import Author from "../../sections/detailsSections/Author";
import Comment from "../../sections/detailsSections/Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";

const Details = () => {
  const newsAndBlogData = useSelector((state) => state.newsData.data);
  console.log(newsAndBlogData);
  const dispatch=useDispatch()
  const { id } = useParams();
  console.log(id);
  const detailsItem = newsAndBlogData.find((item) => item.id == id);
  console.log(detailsItem);
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  return (
    <>
      <HeroBanner detailsItem={detailsItem} />
      <DetailCards  />
      <Author detailsItem={detailsItem} />
      <Comment detailsItem={detailsItem} />
    </>
  );
};

export default Details;
