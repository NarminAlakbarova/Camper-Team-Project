import React from "react";
import { Link } from "react-router-dom";

const LastestNewsCards = ({ newsimg, newsdate, newtitle }) => {
  return (
    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 my-2">
      <div className="card">
        <div className="card-img">
          <img src={newsimg} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <p>{newsdate}</p>
         <div className="title-link">
         <Link className="title">{newtitle}</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
         </div>

          <div className="tags">
            <Link>Camping</Link>
            <Link>Travel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNewsCards;
