import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineClock } from "react-icons/hi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { v4 as uuid } from "uuid";
import SearchForm from "./searchForm";
import "./index.scss";
import { getToursData, sortData, sortDataPrice } from "../../redux/toursDataSlice";
import { Link } from "react-router-dom";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";

const AllToursPage = () => {
  const [card, setCard] = useState(true);
  const tours = useSelector((state) => state.toursData.data);
  console.log(tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursData());
  }, [dispatch]);

  const changeCard1 = () => setCard(true);
  const changeCard2 = () => setCard(false);
  const handleSortData=(value)=>{
    dispatch(sortData(value))
  }
  const handleSortPrice = (value) => {
    dispatch(sortDataPrice(value))
  };
  return (
    <>
      <div id="hero-banner-all-tours">
        <div className="container">
          <div className="hero-banner-all-tours">
            <p>ALL TOURS</p>
            <span>IMPRESSIONS OF OUR TOURS</span>
          </div>
        </div>
      </div>
      <section id="all-tours-content">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-4 all-tours-left">
              <div className="search-tour">
                <SearchForm />
              </div>
            </div>
            <div className="col col-12 col-md-8 all-tours-right">
              <div>
                <p className="tour-count">{tours.length} Results Found</p>
                <div className="tour-filter">
                  <div className="tour-filter-left">
                    <p>Sort by :</p>
                    <select onChange={(e)=>handleSortData(e.target.value)}>
                      <option value="release">Release Date</option>
                      <option value="date">Tour Date</option>
                      <option value="title">Title</option>
                      <option value="rating">Rating</option>
                      <option value="duration">Duration</option>
                    </select>
                    <select
                      onChange={(e) => handleSortPrice(e.target.value)}
                    >
                      <option value="" hidden>
                        Tour Price
                      </option>
                      <option value="asc">Ascending</option>
                      <option value="dsc">Descending</option>
                    </select>
                  </div>
                  <div className="tour-filter-right">
                    <button
                      style={card ? { color: "#ffaf19" } : { color: "#000" }}
                      onClick={changeCard1}
                    >
                      <CgMenuGridO />
                    </button>
                    <button
                      style={card ? { color: "#000" } : { color: "#ffaf19" }}
                      onClick={changeCard2}
                    >
                      <TfiMenuAlt />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                {tours.map((tour) => {
                  return card ? (
                    <Card1 key={uuid()} tour={tour} />
                  ) : (
                    <Card2 key={uuid()} tour={tour} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllToursPage;
