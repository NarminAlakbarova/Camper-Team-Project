import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const BlogContent = () => {
  return (
    <div id="blog-content">
      <div className="container">
        <div className="blog-content">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <LeftSide />
            </div>
            <div className="col-lg-4 col-md-12">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
