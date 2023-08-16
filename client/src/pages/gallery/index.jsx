import React, { useState } from "react";
import { Modal } from "antd";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./index.scss";
import img1 from "../../assets/img/gallery/gallery3-76.jpg";
import img2 from "../../assets/img/gallery/gallery6-6.jpg";
import img3 from "../../assets/img/gallery/gallery2-6.jpg";
import img4 from "../../assets/img/gallery/gallery4-6.jpg";
import img5 from "../../assets/img/gallery/gallery5-6.jpg";
import img6 from "../../assets/img/gallery/gallery9-6.jpg";
import img7 from "../../assets/img/gallery/gallery7-6.jpg";
import img8 from "../../assets/img/gallery/gallery8-6.jpg";
import img9 from "../../assets/img/gallery/gallery4-76.jpg";
import img10 from "../../assets/img/gallery/gallery1-76.jpg";

const GalleryPage = () => {
  const galleryData = [
    {
      img: img1,
      text: "Munich Springfest",
    },
    {
      img: img2,
      text: "Mont Blanc Camping",
    },
    {
      img: img3,
      text: "Luxury Camping Tours",
    },
    {
      img: img4,
      text: "Courmayeur – Rifugio Giorgio",
    },
    {
      img: img5,
      text: "Walker Creek Campground",
    },
    {
      img: img6,
      text: "Altitude Campsites",
    },
    {
      img: img7,
      text: "Kangaroo Island",
    },
    {
      img: img8,
      text: "Rifugio Giorgio",
    },
    {
      img: img9,
      text: "Munich Springfest Camping",
    },
    {
      img: img10,
      text: "Waterfront Campground",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgData, setImgData] = useState({ img: "", i: "" });

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
      setImgData({ img: galleryData[i - 1].img, i: i - 1 });
    } else if (action == "next" && i < 9) {
      setImgData({ img: galleryData[i + 1].img, i: i + 1 });
    }
  };

  return (
    <>
      <Modal footer={false} open={isModalOpen} onCancel={handleCancel}>
        <button className="prev-btn" onClick={() => changeImg("prev")}><FaArrowCircleLeft/></button>
        <div className="img-div">
          <img src={imgData.img} alt="Tour Image" />
        </div>
        <button className="next-btn" onClick={() => changeImg("next")}><FaArrowCircleRight/></button>
      </Modal>
      <div id="hero-banner-gallery">
        <div className="container">
          <div className="hero-banner-gallery">
            <p>GALLERY</p>
            <span>IMPRESSIONS OF OUR TOURS</span>
          </div>
        </div>
      </div>
      <div id="gallery-sec1">
        {galleryData.slice(0, 5).map((item, i) => {
          return (
            <button
              className="gallery-sec1-item"
              key={i}
              onClick={() => {
                showModal(), handleImageData(item.img, i);
              }}
            >
              <div className="bg-img">
                <span>{item.text}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div id="gallery-sec2">
        {galleryData.slice(5).map((item, i) => {
          return (
            <button
              key={i}
              className="gallery-sec1-item"
              onClick={() => {
                showModal(item.img), handleImageData(item.img, i + 5);
              }}
            >
              <div className="bg-img">
                <span>{item.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default GalleryPage;
