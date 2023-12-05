import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getToursData } from "../../redux/toursDataSlice";
import { getBookingData } from "../../redux/bookingDataSlice";
import TitleGallery from "../../sections/tourDetailsSections/TitleGallery";
import DetailsTour from "../../sections/tourDetailsSections/DetailsTour";
import { getUsersData } from "../../redux/usersDataSlice";
import { UserContext } from "../../context/UserProvider";
import CustomHelmet from "../../components/CustomHelmet";
import "./index.scss";

const TourDetails = () => {
  const { id } = useParams();
  const { checkUser } = useContext(UserContext);
  const tours = useSelector((state) => state.toursData.data);
  const users = useSelector((state) => state.usersData.data);
  const tour = tours?.find((tour) => tour.id == id);
  const user = users?.find((user) => user?.userName == checkUser?.userName);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursData());
    dispatch(getBookingData());
    dispatch(getUsersData());
  }, [dispatch]);

  return (
    <>
      <CustomHelmet
        title={"Tour Detail Page - Camper"}
        description={
          "Explore the details of our exciting tour. Discover highlights, itinerary, and more. Plan your adventure today!"
        }
      />
      <TitleGallery tour={tour} />
      <DetailsTour tour={tour} user={user} id={id} />
    </>
  );
};

export default TourDetails;
