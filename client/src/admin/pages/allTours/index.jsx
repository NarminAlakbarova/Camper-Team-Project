import { Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToursData } from "../../../redux/toursDataSlice";
import { AiFillEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import "./index.scss";
import Search from "antd/es/input/Search";
const AllToursAdmin = () => {
  const allToursData = useSelector((state) => state.toursData.data);
  console.log(allToursData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToursData());
  }, [dispatch]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
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
      title: "Action",
      render: (obj) => (
        <div style={{ display: "flex", columnGap: "10px" }}>
          <Button type="primary" style={{ backgroundColor: "#4B49AC" }}>
            <AiFillEye />
          </Button>
         
          <Button style={{ backgroundColor: "#4CBB17", color: "white" }}>
            <AiFillEdit />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#F4F6FE ",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        flexDirection: "column",
        rowGap:'20px'
      }}
      className="table-container"
    >
      <div
        className="heading"
        style={{ display: "flex",width:'90%', justifyContent: "space-between" }}
      >
   <div className="remove-item d-flex " style={{alignItems:'center',columnGap:'10px'}} >
   <Button danger>Remove</Button>
   <p className="m-0">Item:{selectedRowKeys.length}</p>
   </div>
        <Search style={{width:'30%'}} placeholder="Searh here..."/>
      </div>
      <Table
        style={{ width: "90%" }}
        columns={columns}
        rowKey={"id"}
        dataSource={allToursData}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default AllToursAdmin;
