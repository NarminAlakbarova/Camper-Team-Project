import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  addNews,
  getNewsData,
  updateNews,
} from "../../../../redux/newsDataSlice";
import InputField from "./InputField";
import { convertBase64 } from "../../../../services/base64";

const NewsForm = () => {
  const [imgValue, setImgValue] = useState('')
  const newsData = useSelector((state) => state.newsData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  const { id } = useParams();
  const updateValues = newsData.find((item) => item.id == id);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const releaseDayYear = new Date(updateValues?.releaseDay).getFullYear();
  const releaseDayMonth =
    new Date(updateValues?.releaseDay).getMonth() < 9
      ? `0${new Date(updateValues?.releaseDay).getMonth() + 1}`
      : `${new Date(updateValues?.releaseDay).getMonth() + 1}`;
  const releaseDayDate =
    new Date(updateValues?.releaseDay).getDate() < 10
      ? `0${new Date(updateValues?.releaseDay).getDate()}`
      : `${new Date(updateValues?.releaseDay).getDate()}`;
  const releaseDay = `${releaseDayYear}-${releaseDayMonth}-${releaseDayDate}`;

  const handleSubmitNewsForm = ({
    releaseDay,
    authorName,
    aboutAuthor,
    ...values
  }) => {
    //   const updatedReleaseDay = `${months[releaseDay.split("-")[1] - 1]} ${
    //     releaseDay.split("-")[2]
    //   }, ${releaseDay.split("-")[0]}`;
    //   const newValues = {
    //     id: id ? id : uuid(),
    //     author: {
    //       authorName: authorName,
    //       aboutAuthor: aboutAuthor,
    //     },
    //     releaseDay: updatedReleaseDay,
    //     ...values,
    //   };
    //  id ? dispatch(updateNews(newValues)) : dispatch(addNews(newValues))
    console.log(values);
    // convertBase64(values.newsImg)
  };
  const getBase64=async(e)=>{
    setImgValue(await convertBase64(e.target.files[0]))
  }
  console.log(imgValue);
  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/feedback"}>
          <GrLinkPrevious className="prev-icon" />
        </Link>
      </div>
      <h1>{id ? "Edit News" : "Add News"}</h1>
      <div className="add-edit-form-admin">
        <Formik
          initialValues={
            id
              ? {
                  releaseDay: releaseDay,
                  authorName: updateValues.author.authorName,
                  aboutAuthor: updateValues.author.aboutAuthor,
                  newsTitle: updateValues.newsTitle,
                  newsContent: updateValues.newsContent,
                }
              : {
                  releaseDay: "",
                  authorName: "",
                  aboutAuthor: "",
                  newsTitle: "",
                  newsContent: "",
                  newsImg: imgValue,
                }
          }
          onSubmit={(values) => handleSubmitNewsForm(values)}
        >
          {({ handleChange ,values }) => (
            <Form>
              <InputField
                name="releaseDay"
                type="date"
                label="ReleaseDay"
                id="releaseDay"
              />
              <InputField
                name="authorName"
                type="text"
                label="Author Name"
                id="authorName"
              />
              <InputField
                name="aboutAuthor"
                type="text"
                label="About Author"
                id="aboutAuthor"
              />
              <InputField
                name="newsTitle"
                type="text"
                label="News Title"
                id="newsTitle"
              />
              <InputField
                name="newsContent"
                type="textarea"
                label="News Content"
                id="newsContent"
              />
              <InputField
                type="file"
                name="newsImg"
                label="News Image"
                id="newsImg"
                value={imgValue}
                onChange={e=>getBase64(e)}
                // onChange={(e) => handleChange(convertBase64(e.target.files[0]))}
                // onChange={e=>console.log(e.target.files[0])}
                // onChange={console.log(this)}
                //   multiple="multiple"
              />
              {/* <input
                type="file"
                name="newsImg"
                label="News Image"
                id="newsImg"
                value={values.newsImg}
                onChange={(e) => handleChange(convertBase64(e.target.files[0]))}
              /> */}
              {/* <input type="file" name="newsImg" id="newsImg" onChange={(e)=>handleChange(e.target.files[0])} /> */}
              <button type="submit">{id ? "Edit" : "Add"}</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewsForm;
