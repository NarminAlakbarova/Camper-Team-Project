import React, { useContext, useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBookingValue } from "../../redux/bookingDataSlice";
import { UserContext } from "../../context/UserProvider";

const BookingForm = () => {
  const { id } = useParams();
  const tours = useSelector((state) => state.toursData.data);
  const bookingData = useSelector((state) => state.bookingData.data);
  const tour = tours.find((tour) => tour.id == id);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [selectedDate, setSelectedDate] = useState(false);
  const [numberPeople, setNumberPeople] = useState("");
  const navigate = useNavigate();
  const requiredTextRef = useRef();
  const { checkUser } = useContext(UserContext);
  const bookingDataStorage =
    JSON.parse(localStorage.getItem("bookingData")) || [];
  const dispatch = useDispatch();
  const currentDate = new Date();
  useEffect(() => {
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  }, []);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let existBookedValue = bookingData.find(
    (item) => item.tourTitle == tour?.tourTitle
  );
  const firstDay = new Date(currentYear, currentMonth, 1);
  const pastLastDay = new Date(currentYear, currentMonth, 0);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysNum = lastDay.getDate();
  const emptyDate = [];
  let allSelectedDays = [];
  const monthDays = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    emptyDate.unshift(pastLastDay.getDate() - i);
  }
  for (let day = 1; day <= daysNum; day++) {
    monthDays.push(`${currentYear}-${months[currentMonth]}-${day}`);
  }
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const handlePrevMonth = () => {
    if (
      currentYear == currentDate.getFullYear()
        ? currentMonth > currentDate.getMonth()
        : true
    ) {
      if (currentMonth === 0) {
        setCurrentYear(currentYear - 1);
        setCurrentMonth(11);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };
  const selectDate = (item) => {
    setSelectedDate(item);
    requiredTextRef.current.style.visibility = "hidden";
  };
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (checkUser) {
      if (selectedDate) {
        for (let day = 0; day < tour.tourDuringDay; day++) {
          let newSelectedDate = new Date(selectedDate);
          newSelectedDate.setDate(+selectedDate.split("-")[2] + day);
          allSelectedDays.push(
            `${newSelectedDate.getFullYear()}-${
              months[newSelectedDate.getMonth()]
            }-${newSelectedDate.getDate()}`
          );
        }
        let bookedValue;
        if (existBookedValue) {
          existBookedValue.allSelectedDays.map((item) =>
            allSelectedDays.unshift(item)
          );
          bookedValue = {
            id: existBookedValue.id,
            tourTitle: tour.tourTitle,
            allSelectedDays: allSelectedDays,
            numberPeople: +numberPeople + +existBookedValue.numberPeople,
          };
        } else {
          bookedValue = {
            id: uuid(),
            tourTitle: tour.tourTitle,
            allSelectedDays: allSelectedDays,
            numberPeople: +numberPeople,
          };
        }

        setSelectedDate(false);
        setNumberPeople("");
        dispatch(addBookingValue(bookedValue));

        let selectedBooking = {
          userId: checkUser.id,
          id: uuid(),
          tourTitle: tour.tourTitle,
          numberPeople: +numberPeople,
          bookingSelectedDate:selectedDate,
          tourPrice:tour.tourPriceUSD,
          tourLocation:tour.tourLocation,
          tourAvailability:tour.tourAvailability,
          tourRating:tour.tourRating,
          tourImg:tour.tourImg[0],
          tourDuringDay:tour.tourDuringDay
        };
        localStorage.setItem("bookingData", JSON.stringify(selectedBooking));
        navigate("bookingPage");
      } else {
        requiredTextRef.current.style.visibility = "visible";
      }
    } else {
      alert("please sign in or sign up");
    }
  };

  return (
    <div className="booking-form">
      <div className="month-year">
        <button className="prev-next-btn" onClick={handlePrevMonth}>
          <GrPrevious />
        </button>
        <h3>
          {months[currentMonth]} {currentYear}
        </h3>
        <button className="prev-next-btn" onClick={handleNextMonth}>
          <GrNext />
        </button>
      </div>
      <div className="week-days">
        {weekDays.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="month-days">
        {emptyDate.map((item, index) => (
          <button key={index} className="disabled">
            {item}
          </button>
        ))}
        {monthDays.map((item, index) => {
          if (existBookedValue?.allSelectedDays.includes(item)) {
            return (
              <button className="disabled" key={index}>
                {item.split("-")[2]}
              </button>
            );
          } else {
            if (currentDate.getMonth() == currentMonth) {
              return item.split("-")[2] < currentDate.getDate() ? (
                <button className="disabled" key={index}>
                  {item.split("-")[2]}
                </button>
              ) : (
                <button
                  className={` ${
                    tour?.tourAvailability.some(
                      (item) => item == months[currentMonth]
                    )
                      ? selectedDate == item && "selected"
                      : "disabled"
                  }`}
                  key={index}
                  onClick={() => selectDate(item)}
                >
                  {item.split("-")[2]}
                </button>
              );
            } else {
              return (
                <button
                  className={` ${
                    tour?.tourAvailability.some(
                      (item) => item == months[currentMonth]
                    )
                      ? selectedDate == item && "selected"
                      : "disabled"
                  }`}
                  key={index}
                  onClick={() => selectDate(item)}
                >
                  {item.split("-")[2]}
                </button>
              );
            }
          }
        })}
      </div>
      <p ref={requiredTextRef} className="required-text">
        Please select a date...
      </p>
      <form onSubmit={handleSubmitBooking}>
        <select
          value={numberPeople}
          onChange={(e) => setNumberPeople(e.target.value)}
          required
        >
          <option value="" hidden>
            Number Of People
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">PROCEED BOOKING</button>
      </form>
    </div>
  );
};

export default BookingForm;
