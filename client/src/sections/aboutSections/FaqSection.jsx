import React from "react";
import Accordion from "../../components/Accordion";

const FaqSection = () => {
  return (
    <div id="faq-section">
      <div className="container">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="accordions row">
          <Accordion position={"left"} />
          <Accordion position={"right"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
