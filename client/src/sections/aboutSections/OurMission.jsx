import React, { useState, useEffect } from "react";

const OurMission = () => {
  const percentageValues = [
    { title: "Variety", percent: 90 },
    { title: "Satisfaction", percent: 95 },
    { title: "Quality", percent: 95 },
  ];

  const [progressPercent, setProgressPercent] = useState(
    percentageValues.map((item) => ({ ...item, current: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedProgress = progressPercent.map((item) => {
        if (item.current < item.percent) {
          return { ...item, current: item.current + 1 };
        }
        return item;
      });
      setProgressPercent(updatedProgress);
    }, 20);

    return () => clearInterval(interval);
  }, [progressPercent]);

  return (
    <div id="our-mission">
      <div className="container">
        <div className="our-mission">
          <div className="row">
            <div className="col-md-6 col-sm-12  left-col">
              <h3>Our Mission</h3>
              <p className="mission-title">
                Our wildlife tours are perfect for those who are interested in
                observing and learning about the local fauna, while our
                birdwatching tours are great for those who want to see and hear
                the rarest of birds. Our hiking tours are the perfect way to
                explore the natural beauty and awe-inspiring landscapes
              </p>
            </div>
            <div className="col-md-6  col-sm-12  right-col">
              {progressPercent.map((percentage, index) => (
                <div className={percentage.title.toLowerCase()} key={index}>
                  <div className="percent-title">
                    <p>{percentage.title}</p>
                    <p>{percentage.current}%</p>
                  </div>
                  <div className="percent">
                    <div
                      className="percent-color"
                      style={{ width: `${percentage.current}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
