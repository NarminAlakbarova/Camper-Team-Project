import React, { useEffect } from "react";
import "./index.scss";
import HeroBanner from "../../sections/detailsSections/HeroBanner";
import DetailCards from "../../sections/detailsSections/DetailCards";
import Author from "../../sections/detailsSections/Author";
import Comment from "../../sections/detailsSections/Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";
import { getUsersData } from "../../redux/usersDataSlice";
import UserComments from "../../sections/detailsSections/UserComments";
import CustomHelmet from "../../components/CustomHelmet";

const Details = () => {
  const newsAndBlogData = useSelector((state) => state.newsData.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsItem = newsAndBlogData.find((item) => item.id == id);
  useEffect(() => {
    dispatch(getNewsData());
    dispatch(getUsersData());
  }, [dispatch]);
  return (
    <>
      <CustomHelmet
        title={"Tour Detail - Camper"}
        description={
          "Discover detailed insights about this amazing tour. Read through experiences, insights, and comments from travelers. Plan your adventure today!"
        }
      />
      <HeroBanner detailsItem={detailsItem} />
      <DetailCards />
      <Author detailsItem={detailsItem} />
      <UserComments detailsItem={detailsItem} />
      <Comment detailsItem={detailsItem} />
    </>
  );
};

export default Details;
