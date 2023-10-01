import React from "react";
import userImg from "../../assets/img/feedBack/user1.jpg";
const UserComments = ({ detailsItem }) => {
  return (
    <div id="user-comments">
      <div className="container">
        <div className="user-comments">
          <h3>Comments</h3>
          {detailsItem?.comments ? (
            detailsItem?.comments.map((item,index) => (
              <div className="card my-1" key={index}>
                <div className="img">
                  <img src={userImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="user-info">
                    <div className="name-email">
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                    </div>
                    <p></p>
                  </div>
                  <div className="comment-content">
                    <p>{item.commentContent}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{color:'#ffb156'}}>There are no comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComments;
