import React from "react";
import { Field, Form, Formik } from "formik";
import InputField from "./InputField";
import { DatePicker, Space } from "antd";

const SearchForm = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Formik
      initialValues={{
        keyword: "",
        category: true,
        backpacking: true,
        basecamp:true,
        family:true,
        glamping:true,
        trekking:true,
        winter:true,
        minPrice:'',
        maxPrice:'',
        date:{}
      }}
      onSubmit={(values) => console.log(values)}
    >
        {({handleChange})=>(
      <Form>
        <InputField name="keyword" type={"search"} title="Keyword" />
        <div className="d-flex">
          <InputField name="category" type={"checkbox"} title="Popular Tour" />
          <label htmlFor="category">Popular Tour</label>
        </div>
        <InputField name="duration" title="Duration" type="select"/>
        <p htmlFor="">Date</p>
        {/* <DatePicker name="date" onChange={handleChange} /> */}
        {/* <input type="date" name="" id="" /> */}
        <div className="d-flex">
          <InputField name="minPrice" title="minPrice" type="number" />
          <InputField name="maxPrice" title="maxPrice" type="number" />
        </div>
        <button type="button">Clear Filter</button>
        <hr />
        <div>
          <p className="title-type">Type Filter</p>
          <button type="button">x</button>
        </div>
        <p>Activity</p>
        <InputField type="checkbox" name="backpacking" label="Backpacking Trips" title="Activity"/>
        <InputField type="checkbox" name="basecamp" title="Activity" label="Basecamp Tours" />
        <InputField type="checkbox" name="family" title="Activity" label="Family Camping" />
        <InputField type="checkbox" name="glamping" title="Activity" label="Glamping" />
        <InputField type="checkbox" name="trekking" title="Activity" label="Trekking" />
        <InputField type="checkbox" name="winter" title="Activity" label="Winter Camping" />
        <button type="button">More</button>
        <button type="submit">Search</button>
      </Form>
        )}
    </Formik>
  );
};

export default SearchForm;
