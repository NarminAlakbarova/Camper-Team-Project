import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNews } from "../../redux/newsDataSlice";

const Comment = ({ detailsItem }) => {
  const dispatch = useDispatch();
  const signedUser = JSON.parse(localStorage.getItem("checkUser"));
  const [commentInputs, setCommentInputs] = useState({
    userName: signedUser?.userName,
    commentContent: "",
    name: "",
    email: "",
    website: "",
  });

  let comments = detailsItem?.comments ? detailsItem.comments : [];
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!signedUser) {
      alert("Please sign in.");
      return;
    }
    const updatedComments = [...comments, commentInputs];
    const updatedTour = { ...detailsItem, comments: updatedComments };

    dispatch(updateNews(updatedTour));
    setCommentInputs({
      userName: signedUser.userName,
      commentContent: "",
      name: "",
      email: "",
      website: "",
    });
  };

  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setCommentInputs({ ...commentInputs, [name]: value });
  };
  return (
    <div id="comment">
      <div className="container">
        <div className="comment">
          <h3>Leave a Reply</h3>
          <form action="" onSubmit={handleSubmit}>
            <textarea
              name="commentContent"
              placeholder="Comment*"
              value={commentInputs.commentContent}
              id=""
              cols="30"
              rows="8"
              onChange={handleInputsChange}
            ></textarea>
            <div className="form-group name-email ">
              <input
                type="text"
                placeholder="name*"
                name="name"
                value={commentInputs.name}
                onChange={handleInputsChange}
              />
              <input
                type="email"
                name="email"
                value={commentInputs.email}
                placeholder="email*"
                onChange={handleInputsChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="website"
                value={commentInputs.website}
                placeholder="Website"
                onChange={handleInputsChange}
              />
            </div>
            <div className="form-group d-flex ">
              <input type="checkbox" />
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div className="button">
              <button type="submit">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
