import React from 'react'
import "./index.scss";
import HeroBanner from '../../sections/detailsSections/HeroBanner';
import DetailCards from '../../sections/detailsSections/DetailCards';
import Author from '../../sections/detailsSections/Author';
import Comment from '../../sections/detailsSections/Comment';

const Details = () => {

  return (
 <>
 <HeroBanner/>
 <DetailCards/>
 <Author/>
 <Comment/>
 </>
  )
}

export default Details
