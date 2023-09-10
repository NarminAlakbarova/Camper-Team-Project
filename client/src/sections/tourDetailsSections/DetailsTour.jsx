import React, { useState } from 'react';
import { Collapse } from "antd";
import {FiMail} from "react-icons/fi"
import {TbKayak} from "react-icons/tb";
import {PiCompass} from "react-icons/pi";
import {GiNightSky} from "react-icons/gi";
import {BsSuitHeart} from "react-icons/bs";
import {BsCameraFill} from "react-icons/bs";
import {GiHeavyArrow} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {BsRecordCircle} from "react-icons/bs";
import {LiaFireAltSolid} from "react-icons/lia";
import {MdOutlineDirectionsBike,MdOutlineAutoAwesome} from "react-icons/md";
import {AiFillStar, AiOutlineCheck} from "react-icons/ai";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {BsHandThumbsUp,BsTelephone,BsFilterCircle} from "react-icons/bs"
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';


const DetailsTour = ({tour}) => {
    const [formType, setFormType] = useState("booking")
    const [inpValue, setInpValue] = useState({
        fullName:"",
        email:"",
        enquiry:"",
        checkbox:false,
    })
    const textItinerary="Set up camp, and explore the surrounding area. Take a leisurely stroll around the campground and get familiar with the facilities and amenities available. After setting up camp, take a short hike on one of the nearby trails to get a sense of the local flora and fauna. As the day comes to a close, enjoy a campfire meal and get a good night’s rest in preparation for the days ahead."
    const textFaq="We have you covered! We will email you as items in your order ship, or if there are updates on the status of your order. Can’t find the email?Click here to check the status of your order."
    const itemsItinerary = [
      {
        key: "1",
        label:"Day 1 - Arrive at campground",
        children: textItinerary,
      },
      {
        key: "2",
        label:"Day 2 - Wake up early and embark on a day hike",
        children: textItinerary,
      },
      {
        key: "3",
        label:"Day 3 - Join a guided ranger-led nature walk",
        children: textItinerary,
      },
      {
        key: "4",
        label:"Day 4 - Take a break from hiking",
        children: textItinerary,
      },
      {
        key: "5",
        label: "Day 5 - Pack a lunch and embark on a longer hike",
        children: textItinerary,
      },
    ];
    const itemsFaq = [
      {
        key: "1",
        label:"Can I get the refund?",
        children: textFaq,
      },
      {
        key: "2",
        label:"Can I change the travel date?",
        children: textFaq,
      },
      {
        key: "3",
        label:"My discount code is not working, what do I do?",
        children: textFaq,
      },
      {
        key: "4",
        label:"Do I need to apply visa?",
        children: textFaq,
      },
      {
        key: "5",
        label: "Do you have insurance covered?",
        children: textFaq,
      },
    ];
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(inpValue);
        setInpValue({
            fullName:"",
            email:"",
            enquiry:"",
            checkbox:false,
        })
    }
  return (
    <div id='details-tour'>
        <div className="container">
            <div className="details-tour row">
                <div className="col col-12 col-md-8">
                    <div className="detail-content">
                        <h2>Detail</h2>
                        <p>{tour.detailContent}</p>
                    </div>
                    <div className="detail-content">
                        <h2>Activities</h2>
                        <div className='activities'>
                            <div>
                                <p><GiBoatFishing/>Fishing</p>
                                <p><TbKayak/>Kayak</p>
                                <p><LiaFireAltSolid/>Campfire</p>
                                <p><MdOutlineDirectionsBike/>Biking</p>
                            </div>
                            <div>
                                <p><PiCompass/>Navigating</p>
                                <p><GiHeavyArrow/>KayakShooting</p>
                                <p><GiNightSky/>Night Exploring</p>
                                <p><BsCameraFill/>Photography</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="detail-content">
                        <div className='price-inc-exc'>
                            <h5>Price Includes</h5>
                            <div>
                                <p><AiOutlineCheck/>Air fares</p>
                                <p><AiOutlineCheck/>3 Nights Hotel Accomodation</p>
                                <p><AiOutlineCheck/>On Trip Transport</p>
                                <p><AiOutlineCheck/>2 Meals / day</p>
                            </div>
                        </div>
                        <div className='price-inc-exc'>
                            <h5>Price Excludes</h5>
                            <div>
                                <p><AiOutlineClose/>Driver Service Fee</p>
                                <p><AiOutlineClose/>Guide Service Fee</p>
                                <p><AiOutlineClose/>Room Service Fees</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="detail-content">
                        <h2>What to Expect</h2>
                        <p>
                            When choosing a destination for your backpacking trip, it is
                            important to consider the level of difficulty of the trail and the
                            weather conditions. Some popular backpacking destinations include
                            national parks, wilderness areas, and mountain ranges. It is also
                            important to obtain any necessary permits and to be aware of any
                            regulations or rules for the area you plan to visit
                        </p>
                        <div>
                            <p><BsRecordCircle/>View the Nature</p>
                            <p><BsRecordCircle/>Hiking in the forest</p>
                            <p><BsRecordCircle/>Discover the famous view point “The Lark”</p>
                            <p><BsRecordCircle/>Sunset on the cruise</p>
                        </div>
                    </div>
                    <hr />
                    <div className="detail-content">
                        <h2>Itinerary</h2>
                        <Collapse
                            bordered={false}
                            accordion
                            items={itemsItinerary}
                            defaultActiveKey={["1"]}
                            expandIcon={({ isActive }) =>
                            isActive ? <MinusOutlined /> : <PlusOutlined />
                            }
                        />
                    </div>
                    <div className="detail-content">
                        <h2>FAQ</h2>
                        <Collapse
                            bordered={false}
                            accordion
                            items={itemsFaq}
                            defaultActiveKey={["1"]}
                            expandIcon={({ isActive }) =>
                            isActive ? <MinusOutlined /> : <PlusOutlined />
                            }
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="booking-bar">
                        <div className="booking-bar-top">
                            <div className="booking-bar-header">
                                <button><BsSuitHeart/>Wish List</button>
                                <span>Price</span>
                            </div>
                            <p className='booking-header-text'>Premium Camping</p>
                            <div className="booking-bar-price-review">
                                <p className='tour-price'>${tour?.tourPriceUSD}</p>
                                <div className="stars-review">
                                    <p>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                    </p>
                                    <p className="review-text">({tour?.tourReview} Review)</p>
                                </div>
                            </div>
                        </div>
                        <div id="booking-bar-bottom">
                            <div className="booking-bar-bottom">
                                <div className="form-type-buttons">
                                    <button className={formType=="booking" ? "active" :""} onClick={()=>setFormType("booking")}>Booking Form</button>
                                    <button className={formType=="enquiry" ? "active" :""} onClick={()=>setFormType("enquiry")}>Enquiry Form</button>
                                </div>
                                <div className="form-content">
                                    {formType=="booking" ? 
                                    <BookingForm/>
                                    :
                                    (<form onSubmit={handleSubmit}>
                                        <label htmlFor="full-name">Full Name*</label>
                                        <input type="text" value={inpValue.fullName} id="full-name" onChange={(e)=>setInpValue({...inpValue,fullName:e.target.value})} required />
                                        <label htmlFor="email">Email Address*</label>
                                        <input type="email" value={inpValue.email} id="email" onChange={(e)=>setInpValue({...inpValue,email:e.target.value})} required />
                                        <label htmlFor="">Your Enquiry*</label>
                                        <textarea value={inpValue.enquiry} id="" rows="5" onChange={(e)=>setInpValue({...inpValue,enquiry:e.target.value})} required ></textarea>
                                        <input type="checkbox" checked={inpValue.checkbox} onChange={(e)=>setInpValue({...inpValue,checkbox:e.target.checked})} required />
                                        <span className='checkbox-text'>* I agree with <Link to={""}>Terms of Service</Link> and <Link to={""}>Privacy Statement</Link>.</span>
                                        <button type="submit">SUBMIT ENQUIRY</button>
                                    </form>)
                                }
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="extra-details">
                        <h4>Book With Confidence</h4>
                        <div>
                            <p><BsHandThumbsUp/>No-hassle best price guarantee</p>
                            <p><BsTelephone/>Customer care available 24/7</p>
                            <p><MdOutlineAutoAwesome/>Hand-picked Tours & Activities</p>
                            <p><BsFilterCircle/>Free Travel Insureance</p>
                        </div>
                    </div>
                    <div className="contact-details">
                        <h4>Need Help?</h4>
                        <p><BsTelephone/><Link to={"tel:1-634-567-34"}>T: 1-634-567-34</Link></p>
                        <p><FiMail/><Link to={"mailto:Help@goodlayers.com "}>Help@camper.com </Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsTour