import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getToursData } from "../../redux/toursDataSlice";
import { getBookingData } from "../../redux/bookingDataSlice";
import TitleGallery from "../../sections/tourDetailsSections/TitleGallery";
import DetailsTour from "../../sections/tourDetailsSections/DetailsTour";
import { getUsersData } from "../../redux/usersDataSlice";
import { UserContext } from "../../context/UserProvider";
import "./index.scss";

const TourDetails = () => {
  const [checkWishlist, setCheckWishlist] = useState(false);
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
    user?.wishList.find((item) => item == id) && setCheckWishlist(true);
  }, [dispatch]);

  return (
    <>
      <TitleGallery tour={tour} />
      <DetailsTour
        tour={tour}
        checkWishlist={checkWishlist}
        setCheckWishlist={setCheckWishlist}
        user={user}
      />
    </>
  );
};

export default TourDetails;
