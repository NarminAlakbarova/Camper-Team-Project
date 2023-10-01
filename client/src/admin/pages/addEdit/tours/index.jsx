import React, { useEffect, useState } from "react";
import "../index.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import ToursInputFeilds from "./ToursInputFeilds";
import { useDispatch, useSelector } from "react-redux";
import {
  addTours,
  editTours,
  getToursData,
} from "../../../../redux/toursDataSlice";
import { convertBase64 } from "../../../../services/base64";
const AllToursForm = () => {
  const allToursData = useSelector((state) => state.toursData.data);
  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getToursData());
  }, [dispatch]);

  const editedTours = allToursData.find((item) => item.id == id);
  const monthAbbreviations = [
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
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [inputsValue, setInputsValue] = useState({
    tourTitle: editedTours ? editedTours.tourTitle : "",
    tourReview: editedTours ? editedTours.tourReview : "",
    tourDuringDay: editedTours ? editedTours.tourDuringDay : "",
    tourLocation: editedTours ? editedTours.tourLocation : "",
    tourPriceUSD: editedTours ? editedTours.tourPriceUSD : "",
    tourAvailability: editedTours ? editedTours.tourAvailability : [],
    tourImg: "",
    details: editedTours
      ? editedTours.details
      : {
          maxGuests: "",
          difficulty: "",
          solitudeLv: "",
          distance: "",
        },
    detailContent: editedTours ? editedTours.detailContent : "",
  });
  console.log(inputsValue);
  console.log(startTime);
  console.log(endTime);

  const handleInputsChanges = (e) => {
    const { name, value, type } = e.target;
    console.log(value);
    const updatedValue = type === "number" ? +value : value;
    if (name.startsWith("details_")) {
      const feildName = name.split("_")[1];
      setInputsValue({
        ...inputsValue,
        details: {
          ...inputsValue.details,
          [feildName]: updatedValue,
        },
      });
    } else if (
      name === "tourAvailabilityStartTime" ||
      name === "tourAvailabilityEndTime"
    ) {
      const updatedAvailability =
        name === "tourAvailabilityStartTime"
          ? monthAbbreviations.slice(
              monthAbbreviations.indexOf(updatedValue),
              endTime + 1
            )
          : monthAbbreviations.slice(
              startTime,
              monthAbbreviations.indexOf(updatedValue) + 1
            );

      setStartTime(
        name === "tourAvailabilityStartTime"
          ? monthAbbreviations.indexOf(updatedValue)
          : startTime
      );
      setEndTime(
        name === "tourAvailabilityEndTime"
          ? monthAbbreviations.indexOf(updatedValue)
          : endTime
      );
      setInputsValue({
        ...inputsValue,
        tourAvailability: updatedAvailability,
      });
    } else {
      setInputsValue({ ...inputsValue, [name]: updatedValue });
    }
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const allImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const base64Image = await convertBase64(file);
        allImages.push(base64Image);
      } catch (error) {
        console.error("base64 converting error", error);
      }
    }

    setInputsValue({
      ...inputsValue,
      tourImg: allImages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editTours({ id: id, toursInfo: inputsValue }));
    } else {
      dispatch(addTours(inputsValue));
    }
    setInputsValue({
      tourTitle: "",
      tourReview: "",
      tourDuringDay: "",
      tourLocation: "",
      tourPriceUSD: "",
      tourAvailability: [],
      tourImg: "",
      details: {
        maxGuests: "",
        difficulty: "",
        solitudeLv: "",
        distance: "",
      },
      detailContent: "",
    });
    navigate("/admin/allTours");
  };

  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/allTours"}>
          <GrLinkPrevious className="prev-icon" />
        </Link>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="title mt-2 mb-3">
          <h3 className="text-center ">Add Tours</h3>
        </div>
        <div className="container">
          <div className="row my-2">
            <div className="col-6">
              <ToursInputFeilds
                label={"Tour-Title"}
                type={"text"}
                onChange={handleInputsChanges}
                value={inputsValue.tourTitle}
                name={"tourTitle"}
              />
            </div>
            <div className="col-6">
              <ToursInputFeilds
                label={"Tour-Location"}
                type={"text"}
                onChange={handleInputsChanges}
                value={inputsValue.tourLocation}
                name={"tourLocation"}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-Review"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.tourReview}
                name={"tourReview"}
              />
            </div>
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-During day"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.tourDuringDay}
                name={"tourDuringDay"}
                required
              />
            </div>
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-Price"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.tourPriceUSD}
                name={"tourPriceUSD"}
                required
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-3">
              <ToursInputFeilds
                label={"Max guests"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.details.maxGuests}
                name={"details_maxGuests"}
                required
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"Difficulty"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.details.difficulty}
                name={"details_difficulty"}
                required
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"SolitudeLv"}
                type={"number"}
                onChange={handleInputsChanges}
                value={inputsValue.details.solitudeLv}
                name={"details_solitudeLv"}
                required
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"Distance"}
                type={"text"}
                onChange={handleInputsChanges}
                value={inputsValue.details.distance}
                name={"details_distance"}
                required
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <div className="row ">
                <div className="col-6  ">
                  <div className="select-container">
                    <label htmlFor="">Start Time</label>
                    <select
                      name="tourAvailabilityStartTime"
                      value={inputsValue.tourAvailability[0]}
                      onChange={handleInputsChanges}
                      required
                    >
                      {monthAbbreviations.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="select-container">
                    <label htmlFor="">End Time</label>
                    <select
                      name="tourAvailabilityEndTime"
                      required
                      value={
                        inputsValue.tourAvailability[
                          inputsValue.tourAvailability.length - 1
                        ]
                      }
                      onChange={handleInputsChanges}
                    >
                      {monthAbbreviations.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6  " style={{}}>
              <div className="form-group">
                <label htmlFor="">Tour img</label>
                <input
                  type="file"
                  id="tourImg"
                  onChange={handleFileChange}
                  name="tourImg"
                  multiple
                  style={{
                    padding: "2px 10px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-12 form-group">
              <label htmlFor="">DetailContent</label>
              <textarea
                id=""
                cols="30"
                rows="5"
                onChange={handleInputsChanges}
                value={inputsValue.detailContent}
                name={"detailContent"}
                required
              ></textarea>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-12">
              <button type="submit" className="submit-btn">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AllToursForm;
