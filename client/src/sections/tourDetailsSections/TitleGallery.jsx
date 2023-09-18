import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { PiClockCountdownBold } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { PiMountains } from "react-icons/pi";
import { GrMap } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { Modal } from "antd";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TitleGallery = ({ tour }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgData, setImgData] = useState({ img: "", i: "" });
  const tourImages = tour?.tourImg;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleImageData = (img, i) => {
    setImgData({ img, i });
  };
  const changeImg = (action) => {
    let i = imgData.i;
    if (action == "prev" && i > 0) {
      setImgData({ img: tourImages[i - 1], i: i - 1 });
    } else if (action == "next" && i < 4) {
      setImgData({ img: tourImages[i + 1], i: i + 1 });
    } else if (action == "prev" && i == 0) {
      setImgData({ img: tourImages.at(-1), i: tourImages.length-1});
    }else if (action == "next" && i == 4) {
      setImgData({ img: tourImages[0], i: 0 });
    }
  };
  return (
    <>
      <Modal
        className="modal-gallery"
        footer={false}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <button className="prev-btn" onClick={() => changeImg("prev")}>
          <FaArrowCircleLeft />
        </button>
        <div className="img-div">
          <img src={imgData?.img} alt="Tour Image" />
        </div>
        <button className="next-btn" onClick={() => changeImg("next")}>
          <FaArrowCircleRight />
        </button>
      </Modal>
      <div id="title-gallery">
        <div className="container">
          <div className="title-gallery">
            <h1>{tour?.tourTitle}</h1>
            <p className="stars-review">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span className="tour-text">({tour?.tourReview} Review)</span>
            </p>
            <div className="icons-details">
              <p>
                <PiClockCountdownBold />
                <span>{tour?.tourDuringDay} Days</span>
                {tour?.tourDuringNight && (
                  <span> {tour?.tourDuringNight} night</span>
                )}
              </p>
              <p>
                <BsPerson />
                <span>Max Guests: {tour?.details.maxGuests}</span>
              </p>
              <p>
                <PiMountains />
                <span>Difficulty: {tour?.details.difficulty}/10</span>
              </p>
              <p>
                <GrMap />
                <span>Solitude Lv: {tour?.details.solitudeLv}/10</span>
              </p>
              <p>
                <GrLocation />
                <span>Distance: {tour?.details.distance}</span>
              </p>
            </div>
            <div className="row">
              <div className="col col-12 col-md-8 details-img-left">
                <button
                  onClick={() => {
                    showModal(), handleImageData(tourImages[0], 0);
                  }}
                >
                  <img src={tourImages && tourImages[0]} alt="" />
                </button>
              </div>
              <div className="col col-12 col-md-4 details-img-right">
                <div className="img-div">
                  {tourImages?.slice(1, 3).map((image, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        showModal(), handleImageData(image, i);
                      }}
                    >
                      <img src={image} alt="Tour Image" />
                    </button>
                  ))}
                </div>
                <div className="img-div">
                  {tourImages?.slice(3, 5).map((image, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        showModal(), handleImageData(image, i);
                      }}
                    >
                      <img src={image} alt="Tour Image" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleGallery;
