import React from "react";

const Search = () => {
  return (
    <div className="search-section container">
      <form action="">
        <div className="title">
          <label htmlFor="">Keywords</label>
          <input type="search" name="" id="" placeholder="Type your keywords..." />
        </div>
        <div className="title">
          <label htmlFor="">Destination</label>
          <select name="" id="">
            <option value="">Any</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
            <option value="">Asia</option>
       
          </select>
        </div>
        <div className="title">
          <label htmlFor="">Duration</label>
          <select name="" id="">
            <option value="">Any</option>
            <option value="">1 day Tour</option>
            <option value="">1 day Tour</option>
            <option value="">1 day Tour</option>
           
          </select>
        </div>
        <button type="submit">Search now</button>
      </form>
    </div>
  );
};

export default Search;
