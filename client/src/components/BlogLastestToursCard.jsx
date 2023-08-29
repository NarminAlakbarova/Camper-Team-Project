import React from 'react'
import lastestImg1 from "../assets/img/newsAndBlog/news1.jpg";

const BlogLastestToursCard = () => {
  return (
    <div id="latest-tours">
    <h5>Latest Tours</h5>
    <div className="card lastest-card">
      <div className="img">
        <img src={lastestImg1} alt="" />
      </div>
      <div className="lastest-card-content">
        <p className="tours-name">Courmayeur – Rifugio Giorgio Bertone 7 Days 6 Night</p>
        <p className="tours-price">
          From <span className="old-price">$5,100</span>  
            <span className="new-price">$4,900</span>
        </p>
      </div>
    </div>
    <div className="card lastest-card">
      <div className="img">
        <img src={lastestImg1} alt="" />
      </div>
      <div className="lastest-card-content">
        <p className="tours-name">Courmayeur – Rifugio Giorgio Bertone 7 Days 6 Night</p>
        <p className="tours-price">
          From <span className="old-price">$5,100</span>  
            <span className="new-price">$4,900</span>
        </p>
      </div>
    </div>
    <div className="card lastest-card">
      <div className="img">
        <img src={lastestImg1} alt="" />
      </div>
      <div className="lastest-card-content">
        <p className="tours-name">Courmayeur – Rifugio Giorgio Bertone 7 Days 6 Night</p>
        <p className="tours-price">
          From <span className="old-price">$5,100</span>  
            <span className="new-price">$4,900</span>
        </p>
      </div>
    </div>
    <div className="card lastest-card">
      <div className="img">
        <img src={lastestImg1} alt="" />
      </div>
      <div className="lastest-card-content">
        <p className="tours-name">Courmayeur – Rifugio Giorgio Bertone 7 Days 6 Night</p>
        <p className="tours-price">
          From <span className="old-price">$5,100</span>  
            <span className="new-price">$4,900</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default BlogLastestToursCard
