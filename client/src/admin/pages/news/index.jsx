import React, { useEffect, useState } from "react";
import {AiOutlineEye, AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, getNewsData, searchNews } from "../../../redux/newsDataSlice";
import Search from "antd/es/input/Search";
import { Link, useNavigate } from "react-router-dom";
import { BsPlusSquareDotted } from "react-icons/bs";
import "./index.scss";

const News = () => {
  const [detailsNews, setDetailsNews] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const newsData = useSelector((state) => state.newsData.data);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  
  const columns = [
    {
      title: "Image",
      dataIndex: "newsImg",
      render: (element) => <img src={element && element[0]} />,
      key: "image",
    },
    {
      title: "Title",
      dataIndex: "newsTitle",
      key: "title",
    },
    {
      title: "Author Name",
      dataIndex: "author",
      render: (element) => <span>{element?.authorName}</span>,
      key: "author",
    },
    {
      title: "Release Day",
      dataIndex: "releaseDay",
      key: "releaseDay",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="actions">
          <button onClick={()=>showModal(record)}><AiOutlineEye/></button>
          <button onClick={()=>navigate(`/admin/newsForm/${record.id}`)}><AiOutlineEdit/></button>
          <button onClick={()=>handleDelete(record.id)}><AiOutlineDelete/></button>
        </div>
      ),
      key: "actions",
    },
  ];
  const showModal = (newsObj) => {
     setIsModalOpen(true);
    setDetailsNews(newsObj)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value) => {
    dispatch(searchNews(value))
  };
  const handleDelete=(id)=>{
    dispatch(deleteNews(id))
  }
  return (
    <>
      <Modal className="admin-modal" title="Basic Modal" open={isModalOpen}  onCancel={handleCancel}>
          <div className="modal-body-left">
            <div className="author-title">
              <img src={detailsNews?.author.authorImg} alt="Author Image" />
              <p>{detailsNews?.author.authorName}</p>
            </div>
            <p className="release-day-title"><span>{detailsNews?.releaseDay}</span>, {detailsNews?.newsTitle}</p>
            <p className="content-news">{detailsNews?.newsContent}</p>
            <span>-{detailsNews?.author.aboutAuthor}</span>
          </div>
          <img src={detailsNews?.newsImg[0]} alt="NewsImage" />
      </Modal>
      <div className="admin-data-table">
            <div className="search-add">
              <Search placeholder="Search now..." onSearch={onSearch} />
              <Link to={"/admin/newsForm"}>
                <BsPlusSquareDotted className="add-icon" />
              </Link>
            </div>
        <Table
        rowKey={"id"}
        dataSource={newsData} columns={columns} style={{width:"90%"}} />
      </div>
    </>
  );
};

export default News;
