import React from "react";

const FeedBackContent = ({ userimg, username, country, content,slideIndex,setSlideIndex }) => {
  return <div className="card">
<div className="user-img">
    <img src={userimg} alt="" />

</div>
<div className="feedback">
    <p>{username}</p>
    <p>{country}</p>
    <p>{content}</p>
</div>
  </div>;
};

export default FeedBackContent;
