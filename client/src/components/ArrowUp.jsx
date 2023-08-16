import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowUp = () => {
  const ref = useRef();
  const scrollFunc = () => {
    document.documentElement.scrollTop >= 110
      ? (ref.current.style.display = "flex")
      : (ref.current.style.display = "none");
  };
  const handleScrollTop= ()=> {
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = function () {
    scrollFunc();
  };
  return (
    <div className="arrow-up" ref={ref} onClick={handleScrollTop}>
      <FaArrowUp />
    </div>
  );
};

export default ArrowUp;
