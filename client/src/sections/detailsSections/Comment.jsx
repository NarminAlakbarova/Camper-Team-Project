import React from "react";

const Comment = () => {
  return (
    <div id="comment">
      <div className="container">
        <div className="comment">
          <h3>Leave a Reply</h3>
          <form action="">
            <textarea name="" placeholder="Comment*" id="" cols="30" rows="8"></textarea>
            <div className="form-group name-email ">
              <input type="text" placeholder="name*" />
              <input type="email" placeholder="email*" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" />
            </div>
            <div className="form-group d-flex ">
                <input type="checkbox" />
                <p >Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <div className="button">
                <button>Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
