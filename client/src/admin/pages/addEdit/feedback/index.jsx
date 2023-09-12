import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from "uuid";
import { addFeedback, feedBackData, updateFeedback } from "../../../../redux/feedBackDataSlice";
import InputField from "./InputField";

const FeedbackForm = () => {
  const feedbackData = useSelector((state) => state.feedBackData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedBackData());
  }, [dispatch]);
  console.log(feedbackData);
  const {id} = useParams()
  const navigate=useNavigate()
  const updateData=feedbackData.find(item=>item.id==id)
  console.log(updateData);
  const handleSubmitForm=(values)=>{
    id ? dispatch(updateFeedback({...values,id: id})) : dispatch(addFeedback({...values,id:uuid() }))
    navigate("/admin/feedback")
  }
  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/feedback"}>
          <GrLinkPrevious className="prev-icon" />
        </Link>
      </div>
      <h1>{id ? "Edit Feedback" : "Add Feedback" }</h1>
      <div className="add-edit-form-feedback">
        <Formik
            initialValues={
              id ? {
                userName:updateData?.userName,
                userStatus:updateData?.userStatus,
                raiting:updateData?.raiting,
                feedBack:updateData?.feedBack
            }
              : {
                userName:"",
                userStatus:"",
                raiting:0,
                feedBack:""
            }
            }
            onSubmit={(values)=>handleSubmitForm(values)}
        >
            <Form>
                <InputField type="text" label="User Name" name="userName" id="userName"/>
                <InputField type="text" label="User Status" name="userStatus" id="userStatus"/>
                <InputField type="number" label="Raiting" name="raiting" id="raiting"/>
                <InputField type="file" label="User Image" name="userImg" id="userImg"/>
                <InputField type="textarea" label="Feedback" name="feedBack" id="feedBack"/>
                <button type="submit">{id ? "Edit" : "Add"}</button>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;
