import React, { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addDeleteWishList, getUsersData } from "../../redux/usersDataSlice";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const WishList = () => {
  const { checkUser } = useContext(UserContext);
  const tours = useSelector((state) => state.toursData.data);
  const users = useSelector((state) => state.usersData.data);
  const user = users.find((user) => user.userName == checkUser.userName);
  const wishTours = [];
  const dispatch = useDispatch();

  user?.wishList?.map((wish) =>
    tours.map((tour) => tour.id == wish && wishTours.push(tour))
  );

  const handleDeleteWishTour = (id) => {
    const newWishList = user.wishList.filter((item) => item != id);
    dispatch(addDeleteWishList({ id: user.id, wishList: newWishList }));
  };
  return (
    <div className="user-dashboard-right">
      <p className="page-path">
        <Link to="/userProfile/dashboard">
          Dashboard
          <IoIosArrowForward />
        </Link>{" "}
        Wish List
      </p>
      <div className="user-wish-list">
        <table>
          <thead>
            <tr>
              <th>Tour Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishTours?.map((wishTour) => (
              <tr key={uuid()}>
                <td>
                  <div className="table-td">
                    <img src={wishTour?.tourImg[0]} alt="Tour Image" />
                    <div className="tour-name-during">
                      <Link to={`/tourDetails/${wishTour.id}`}>
                        {wishTour?.tourTitle}
                      </Link>
                      <p className="svg-text">
                        <AiOutlineClockCircle />
                        {wishTour?.tourDuringDay} days{" "}
                        {wishTour?.tourDuringNight && (
                          <span>{wishTour?.tourDuringNight} nights</span>
                        )}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <button className="svg-text">
                    <RiDeleteBinLine />
                    <span
                      className="remove-btn-text"
                      onClick={() => handleDeleteWishTour(wishTour.id)}
                    >
                      Remove
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
