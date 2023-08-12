import React, { useRef, useState } from "react";
import { Carousel, Modal } from "antd";
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
  const dataSec1 = [
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
  ];
  const dataSec2 = [
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
  const [section, setSection] = useState("");
  const ref = useRef();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <Carousel ref={ref} arrows>
          {section == "section1"
            ? dataSec1.map((item, i) => {
                return (
                  <div key={i} className="carousel-img-div">
                    <img src={item.img} alt="Tour Image" />
                  </div>
                );
              })
            : dataSec2.map((item, i) => {
                return (
                  <div key={i} className="carousel-img-div">
                    <img src={item.img} alt="Tour Image" />
                  </div>
                );
              })}
        </Carousel>
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
        {dataSec1.map((item, i) => {
          return (
            <button
              className="gallery-sec1-item"
              key={i}
              onClick={() => {
                setSection("section1"),
                  showModal(),
                  ref.current && ref.current.goTo(i);
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
        {dataSec2.map((item, i) => {
          return (
            <button
              key={i}
              className="gallery-sec1-item"
              onClick={async () => {
                setSection("section2"),
                  showModal(item.img),
                  ref.current && (await ref.current.goTo(i));
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
