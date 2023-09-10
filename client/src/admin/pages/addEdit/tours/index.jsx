import React from "react";
import '../index.scss'
import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import ToursInputFeilds from "./ToursInputFeilds";
const AllToursForm = () => {
  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/allTours"}>
          <GrLinkPrevious className="prev-icon" />
        </Link>
      </div>
      <form action="">
        <div className="title mt-2 mb-3">
          <h3 className="text-center ">Add Tours</h3>
        </div>
        <div className="container">
          <div className="row my-2">
            <div className="col-6">
              <ToursInputFeilds
                label={"Tour-Title"}
                type={"text"}
                name={"tourTitle"}
              />
            </div>
            <div className="col-6">
              <ToursInputFeilds
                label={"Tour-Location"}
                type={"text"}
                name={"tourLocation"}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-Review"}
                type={"number"}
                name={"tourReview"}
              />
            </div>
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-During day"}
                type={"number"}
                name={"tourDuringDay"}
              />
            </div>
            <div className="col-xl-4">
              <ToursInputFeilds
                label={"Tour-Price"}
                type={"number"}
                name={"tourPriceUSD"}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-3">
              <ToursInputFeilds
                label={"Max guests"}
                type={"number"}
                name={"details.maxGuests"}
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"Difficulty"}
                type={"number"}
                name={"details.difficulty"}
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"SolitudeLv"}
                type={"number"}
                name={"details.solitudeLv"}
              />
            </div>
            <div className="col-3">
              <ToursInputFeilds
                label={"Distance"}
                type={"text"}
                name={"details.distance"}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <ToursInputFeilds
                    label={"Start Time"}
                    type={"month"}
                    name={"tourAvailabilityStart"}
                  />
                </div>
                <div className="col-6">
                  <ToursInputFeilds
                    label={"End Time"}
                    type={"month"}
                    name={"tourAvailabilityEnd"}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <ToursInputFeilds
                label={"Tour Img"}
                type={"file"}
                name={"tourImg"}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-12 form-group">
              <label htmlFor="">DetailContent</label>
              <textarea
                id=""
                cols="30"
                rows="5"
                name={"detailContent"}
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
