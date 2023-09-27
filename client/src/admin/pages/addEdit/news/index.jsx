import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { convertBase64 } from "../../../../services/base64";
import InputField from "./InputField";
import {addNews,getNewsData,updateNews} from "../../../../redux/newsDataSlice";

const NewsForm = () => {
  const [imgValue, setImgValue] = useState("");
  const [authorImgValue, setAuthorImgValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsData.data);

  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  
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

  // const getBase64 = async (e) => {
  //MULTIPLE FILES
  // for (let i = 0; i < e.length; i++) {
  //   console.log(await convertBase64(e[i]));
  // }
  // };
  const handleSubmitNewsForm = ({ releaseDay, ...values }) => {
    const updatedReleaseDay = `${months[releaseDay.split("-")[1] - 1]} ${
      releaseDay.split("-")[2]
    }, ${releaseDay.split("-")[0]}`;
    const newValues = {
      id: id ? id : uuid(),
      author: {
        authorImg: authorImgValue,
        authorName: values.authorName,
        aboutAuthor: values.aboutAuthor,
      },
      releaseDay: updatedReleaseDay,
      newsImg: [imgValue],
      newsTitle: values.newsTitle,
      newsContent: values.newsContent,
    };
    id ? dispatch(updateNews(newValues)) : dispatch(addNews(newValues));
    navigate(-1);
  };
  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/news"}>
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
                  authorName: updateValues?.author.authorName,
                  aboutAuthor: updateValues?.author.aboutAuthor,
                  newsTitle: updateValues?.newsTitle,
                  newsContent: updateValues?.newsContent,
                }
              : {
                  releaseDay: "",
                  authorName: "",
                  aboutAuthor: "",
                  newsTitle: "",
                  newsContent: "",
                }
          }
          onSubmit={(values) => handleSubmitNewsForm(values)}
        >
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
            <label htmlFor="newsImg">News Image</label>
            <input
              type="file"
              name="newsImg"
              id="newsImg"
              required
              onChange={async (e) =>
                setImgValue(await convertBase64(e.target.files[0]))
              }
            />
            <label htmlFor="authorImg">Author Image</label>
            <input
              type="file"
              name="authorImg"
              id="authorImg"
              required
              onChange={async (e) =>
                setAuthorImgValue(await convertBase64(e.target.files[0]))
              }
            />
            {/* <input
              type="file"
              name="newsImg"
              id="newsImg"
              multiple
              onChange={(e) => getBase64(e.target.files)}
            /> */}
            <button type="submit">{id ? "Edit" : "Add"}</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewsForm;
