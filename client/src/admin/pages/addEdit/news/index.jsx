import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNews, getNewsData, updateNews } from "../../../../redux/newsDataSlice";
import InputField from "./InputField";

const NewsForm = () => {
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
    const updatedReleaseDay = `${months[releaseDay.split("-")[1] - 1]} ${
      releaseDay.split("-")[2]
    }, ${releaseDay.split("-")[0]}`;
    const newValues = {
      id: id ? id : uuid(),
      author: {
        authorName: authorName,
        aboutAuthor: aboutAuthor,
      },
      releaseDay: updatedReleaseDay,
      ...values,
    };
   id ? dispatch(updateNews(newValues)) : dispatch(addNews(newValues))
  };
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
                  newsImg: [],
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
            <InputField
              type="file"
              name="newsImg"
              label="News Image"
              id="newsImg"
              //   multiple="multiple"
            />
            <button type="submit">{id ? "Edit" : "Add"}</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewsForm;
