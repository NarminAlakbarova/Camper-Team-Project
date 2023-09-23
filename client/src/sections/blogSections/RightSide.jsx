import React from "react";
import BlogLastestToursCard from "../../components/BlogLastestToursCard";

import BlogArticlesCard from "../../components/BlogArticlesCard";
import Confidence from "./Confidence";
const RightSide = () => {
  return (
    <>
      <BlogLastestToursCard />

      <Confidence />
      <div id="articles">
        <h5>Recent Articles</h5>
        <BlogArticlesCard />
      </div>
    </>
  );
};

export default RightSide;
