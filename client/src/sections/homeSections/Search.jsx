import React from "react";

const Search = () => {
  return (
    <div id="search-section">
      <div className="container">
        <div className="search-section ">
          <form action="">
            <div className="title">
              <label htmlFor="">Keywords</label>
              <input
                type="search"
                name=""
                id=""
                className="keywords"
                placeholder="Type your keywords..."
              />
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
      </div>
    </div>
  );
};

export default Search;
