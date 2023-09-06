import React, { useEffect, useState } from "react";
import {AiOutlineEye, AiOutlineEdit} from "react-icons/ai"
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import { feedBackData } from "../../../redux/feedBackDataSlice";

const FeedBack = () => {
  const [detailsFeedback, setDetailsFeedback] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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
      key: "title",
    },
    {
      title: "User Status",
      dataIndex: "userStatus",
      key: "author",
    },
    {
      title: "Feedback",
      dataIndex: "feedBack",
      render: (element) => <span>{element.slice(0,25)}...</span>,
      key: "releaseDay",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="actions">
          <button onClick={()=>showModal(record)}><AiOutlineEye/></button>
          <button><AiOutlineEdit/></button>
        </div>
      ),
      key: "actions",
    },
  ];
  const showModal = (newsObj) => {
    setIsModalOpen(true);
    setDetailsFeedback(newsObj)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <>
      <Modal className="admin-modal" title="Basic Modal" open={isModalOpen}  onCancel={handleCancel}>
          <div className="modal-body-left">
            <div className="author-title">
              <img src={detailsFeedback?.userImg} alt="Author Image" />
              <p>{detailsFeedback?.userName}</p>
            </div>
            <p className="release-day-title"><span>{detailsFeedback?.userStatus}</span></p>
            <p className="content-news">{detailsFeedback?.feedBack}</p>
          </div>
      </Modal>
      <div className="admin-data-table">
        <div className="remove-search">
            <div className="remove-search-left">
              <button>Remove</button>
              <span>Item: {selectedRowKeys.length}</span>
            </div>
            <Search placeholder="Search now..." onSearch={onSearch} />
        </div>
        <Table
        style={{width:'90%'}}
        rowSelection={rowSelection} 
        rowKey={"id"}
        dataSource={feedbackData} columns={columns} />
      </div>
    </>
  );
};

export default FeedBack;
