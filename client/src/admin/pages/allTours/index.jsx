import { Image, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTours,
  getToursData,
  searchTours,
  updatedToursData,
} from "../../../redux/toursDataSlice";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./index.scss";
import Search from "antd/es/input/Search";
import { BsPlusSquareDotted } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllToursAdmin = () => {
  const allToursData = useSelector((state) => state.toursData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToursData());
    dispatch(updatedToursData());
  }, [dispatch]);
  const [detailsTours, setDetailsTours] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (tourobj) => {
    setShowModal(true);
    setDetailsTours(tourobj);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTours(id));
  };

  const columns = [
    {
      title: "Img",
      dataIndex: "tourImg",
      render: (tourImg) => (
        <Image
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
          src={`${tourImg[0]}`}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "tourTitle",
      render: (el) => `${el.slice(0, 20)}...`,
    },
    {
      title: "Location",
      dataIndex: "tourLocation",
    },
    {
      title: "Price",
      dataIndex: "tourPriceUSD",
      render: (el) => `${el}$`,
    },
    {
      title: "During Day",
      dataIndex: "tourDuringDay",
    },
    {
      title: "Distance",
      dataIndex: "details",
      render: (el) => el.distance,
    },
    {
      title: "Action",
      render: (obj) => (
        <div className="actions">
          <button onClick={() => handleShowModal(obj)}>
            <AiOutlineEye />
          </button>
          <Link to={`/admin/tours/${obj.id}`}>
            <AiOutlineEdit />
          </Link>
          <button>
            <AiOutlineDelete onClick={() => handleDelete(obj.id)} />
          </button>
        </div>
      ),
    },
  ];
  const onSearch = (value) => {
    dispatch(searchTours(value));
  };
  return (
    <div className="admin-data-table ">
      <Modal
        title="Basic Modal"
        open={showModal}
        className="admin-modal"
        onCancel={handleCloseModal}
      >
        <div className="ant-modal-content">
          <div className="modal-body-left">
            <h5>{detailsTours?.tourTitle}</h5>
            <p>
              <span>Location:</span> {detailsTours?.tourLocation}
            </p>
            <p>
              <span>Price</span>: {detailsTours?.tourPriceUSD}
            </p>
            <p>
              <span>Max Guest:</span> {detailsTours?.details?.maxGuests}
            </p>
            <p>
              <span>Distance</span>: {detailsTours?.details?.distance}
            </p>
            <p>
              <span>Raiting</span>: {detailsTours?.tourRating}
            </p>
            <p>
              <span>Content</span>: {detailsTours?.detailContent}
            </p>
          </div>
        </div>
        <img src={detailsTours?.tourImg[0]} alt="" />
      </Modal>
      <div className="remove-search ">
        <div
          className="remove-item d-flex "
          style={{ alignItems: "center", columnGap: "10px" }}
        ></div>
        <div className="search-add ">
          <Search onSearch={onSearch} placeholder="Searh here..." />
          <Link to={"/admin/tours"}>
            <BsPlusSquareDotted className="add-icon" />
          </Link>
        </div>
      </div>
      <Table
        style={{ width: "90%" }}
        columns={columns}
        rowKey={"id"}
        dataSource={allToursData}
      />
    </div>
  );
};

export default AllToursAdmin;
