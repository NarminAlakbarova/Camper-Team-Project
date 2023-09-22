import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegLifeRing } from "react-icons/fa";
const Confidence = () => {
  return (
    <div id="confidence">
      <h5>Book With Confidence</h5>
      <div className="confidence-content">
        <div className="conf-group">
          <AiOutlineLike className="icon" />
          <p>No-hassle best price guarantee</p>
        </div>
        <div className="conf-group">
          <AiOutlinePhone className="icon" />
          <p>Customer care available 24/7</p>
        </div>
        <div className="conf-group">
          <AiOutlineStar className="icon" />
          <p>Hand-picked Tours & Activities</p>
        </div>
        <div className="conf-group">
          <FaRegLifeRing className="icon" />
          <p>Free Travel Insureance</p>
        </div>
      </div>
    </div>
  );
};

export default Confidence;
