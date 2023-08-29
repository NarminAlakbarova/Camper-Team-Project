import React, { useState } from "react";
import { Form, Formik } from "formik";
import {BsSliders} from "react-icons/bs";
import {MdKeyboardArrowUp} from "react-icons/md"
import {MdKeyboardArrowDown} from "react-icons/md"
import InputField from "./InputField";

const SearchForm = () => {
  const [viewActivity, setViewActivity] = useState(true)
  const [moreActivity, setMoreActivity] = useState(false)

  const handleViewActivity=()=>{
    viewActivity ? setViewActivity(false) :setViewActivity(true)
  }
  return (
    <Formik
      initialValues={{
        keyword: "",
        duration:"",
        category: false,
        backpacking: false,
        basecamp:false,
        family:false,
        glamping:false,
        trekking:false,
        winter:false,
        minPrice:'',
        maxPrice:'',
      }}
      onSubmit={(values) => console.log(values)}
    >
        {({resetForm})=>(
      <Form>
        <InputField name="keyword" type={"search"} title="Keywords" />
        <InputField name="category" type={"checkbox"} title="Category" label="Popular Tour" />
        <InputField name="duration" title="Duration" type="select"/>
        <div className="price-search">
          <InputField name="minPrice" title="Min Price" type="number" />
          <InputField name="maxPrice" title="Max Price" type="number" />
        </div>
        <button className="clear-btn" type="button" onClick={resetForm}>x Clear Filter</button>
        <hr />
        <div className="search-type-activity">
          <div><BsSliders/>Type Filter</div>
          <button className="type-filter-btn" type="button" onClick={handleViewActivity}>{viewActivity ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>
        </div>
        <div className="activity-div" style={viewActivity ? {height:"250px"} : {height:"0px"}}>
          <p className="search-title">Activity</p>
          <InputField type="checkbox" name="backpacking" label="Backpacking Trips" title="Activity"/>
          <InputField type="checkbox" name="basecamp" title="Activity" label="Basecamp Tours" />
          <InputField type="checkbox" name="family" title="Activity" label="Family Camping" />
          <InputField type="checkbox" name="glamping" title="Activity" label="Glamping" />
          <InputField type="checkbox" name="trekking" title="Activity" label="Trekking" />
          {moreActivity && <InputField type="checkbox" name="winter" title="Activity" label="Winter Camping" />}
          {!moreActivity && <button className="more-btn" type="button" onClick={()=>setMoreActivity(true)}>More<MdKeyboardArrowDown/></button>}
        </div>
        <button className="search-btn" type="submit">Search</button>
      </Form>
        )}
    </Formik>
  );
};

export default SearchForm;
