import React from "react";
import leader1 from "../../assets/img/about/thumbnail-1.jpg";
import leader2 from "../../assets/img/about/thumbnail-2.jpg";
import leader3 from "../../assets/img/about/thumbnail-3.jpg";
import leader4 from "../../assets/img/about/thumbnail-4.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

const LeaderCards = ({ name, status, img }) => (
  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6  my-3">
    <div className="card">
      <div className="img">
        <div className="overlay">
          <div className="icons">
            <BiLogoFacebook />
            <FaLinkedinIn />
            <BiLogoPinterestAlt />
            <AiOutlineTwitter />
          </div>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h3 className="leader-name">{name}</h3>
        <p className="leader-status">{status}</p>
      </div>
    </div>
  </div>
);

const Leaders = () => {
  return (
    <div id="leaders">
      <div className="container">
        <div className="leaders">
          <p className="title">Meet Our Leaders</p>
          <div className="row">
            <LeaderCards
              img={leader4}
              name="Dave Winger"
              status="Tour Manager"
            />
            <LeaderCards
              img={leader3}
              name="Paul Frank"
              status="Chief Marketing"
            />
            <LeaderCards
              img={leader2}
              name="Theresa Webb"
              status="General Manager"
            />
            <LeaderCards
              img={leader1}
              name="Jane Smith"
              status="CEO & Founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
