import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getToursData } from "../../redux/toursDataSlice";
import { getBookingData } from "../../redux/bookingDataSlice";
import TitleGallery from "../../sections/tourDetailsSections/TitleGallery";
import DetailsTour from "../../sections/tourDetailsSections/DetailsTour";
import "./index.scss";

const TourDetails = () => {
  const { id } = useParams();
  const tours = useSelector((state) => state.toursData.data);
  const tour = tours.find((tour) => tour.id == id);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getToursData());
     dispatch(getBookingData());
  }, [dispatch]);
  return (
    <>
      <TitleGallery tour={tour} />
      <DetailsTour tour={tour} />
    </>
  );
};

export default TourDetails;
