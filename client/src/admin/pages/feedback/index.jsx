import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import {
  deleteFeedback,
  feedBackData,
  searchFeedBack,
} from "../../../redux/feedBackDataSlice";

const FeedBack = () => {
  const [detailsFeedback, setDetailsFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const feedbackData = useSelector((state) => state.feedBackData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedBackData());
  }, [dispatch]);

  const columns = [
    {
      title: "Image",
      dataIndex: "userImg",
      render: (element) => <img src={element} alt="User Image" />,
      key: "image",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "User Status",
      dataIndex: "userStatus",
      key: "userStatus",
    },
    {
      title: "Feedback",
      dataIndex: "feedBack",
      render: (element) => <span>{element.slice(0, 25)}...</span>,
      key: "releaseDay",
    },
    {
      title: "Raiting",
      dataIndex: "raiting",
      key: "raiting",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="actions">
          <button onClick={() => showModal(record)}>
            <AiOutlineEye />
          </button>
          <button onClick={() => handleDelete(record.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ),
      key: "actions",
    },
  ];
  const showModal = (newsObj) => {
    setIsModalOpen(true);
    setDetailsFeedback(newsObj);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteFeedback(id));
  };
  const onSearch = (value) => {
    dispatch(searchFeedBack(value));
  };
  return (
    <>
      <Modal
        className="admin-modal"
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="modal-body-left">
          <div className="author-title">
            <img src={detailsFeedback?.userImg} alt="Author Image" />
            <p>{detailsFeedback?.userName}</p>
          </div>
          <p className="release-day-title">
            <span>{detailsFeedback?.userStatus}</span>
          </p>
          <p className="content-news">{detailsFeedback?.feedBack}</p>
        </div>
      </Modal>
      <div className="admin-data-table">
        <div className="search-add">
          <Search placeholder="Search now..." onSearch={onSearch} />
        </div>
        <Table
          style={{ width: "90%" }}
          rowKey={"id"}
          dataSource={feedbackData}
          columns={columns}
        />
      </div>
    </>
  );
};

export default FeedBack;
