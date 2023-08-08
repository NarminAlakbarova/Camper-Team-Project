import React, { useEffect, useState } from "react";

const Counter = ({ initialValue, className, format }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let animationStartTime;
    const animationDuration = 2000;

    const animateCounter = (timestamp) => {
      if (!animationStartTime) animationStartTime = timestamp;
      const progress = timestamp - animationStartTime;
      if (progress <= animationDuration) {
        setCounter(Math.ceil((initialValue * progress) / animationDuration));
        requestAnimationFrame(animateCounter);
      } else {
        setCounter(initialValue);
      }
    };

    requestAnimationFrame(animateCounter);

    return () => {
      animationStartTime = null;
    };
  }, [initialValue]);

  return <div className={className}>{format ? format(counter) : counter}</div>;
};

export default Counter;
