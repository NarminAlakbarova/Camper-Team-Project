import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from "uuid";
import { addFeedback, feedBackData, updateFeedback } from "../../../../redux/feedBackDataSlice";
import { convertBase64 } from "../../../../services/base64";
import InputField from "./InputField";

const FeedbackForm = () => {
  const feedbackData = useSelector((state) => state.feedBackData.data);
  const [userImg, setUserImg] = useState("")
  const {id} = useParams()
  const navigate=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedBackData());
  }, [dispatch]);
  
  const updateData=feedbackData.find(item=>item.id==id)
  const handleSubmitForm=(values)=>{
    id ? dispatch(updateFeedback({...values,userImg:userImg,id: id})) : dispatch(addFeedback({...values,userImg:userImg,id:uuid() }))
    navigate(-1)
  }
  return (
    <div id="tours-form">
      <div id="prev-icon">
        <Link to={"/admin/feedback"}>
          <GrLinkPrevious className="prev-icon" />
        </Link>
      </div>
      <h1>{id ? "Edit Feedback" : "Add Feedback" }</h1>
      <div className="add-edit-form-admin">
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
                <label htmlFor="newsImg">User Image</label>
                  <input
                    type="file"
                    name="userImg"
                    id="userImg"
                    required
                    onChange={async (e) =>
                      setUserImg(await convertBase64(e.target.files[0]))
                    }
                  />
                <InputField type="textarea" label="Feedback" name="feedBack" id="feedBack"/>
                <button type="submit">{id ? "Edit" : "Add"}</button>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;
