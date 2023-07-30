import { Link } from "react-router-dom";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="home-hero-banner ">
      <div className="container hero-content">
        <h4>Explore</h4>
        <h1>The New World</h1>
        <p>
          Discover and book tent camping, RV parks, cabins, treehouses, and
          glamping.
        </p>
        <Link to="/allTours" className="discover-link">
          Discover Tours
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
