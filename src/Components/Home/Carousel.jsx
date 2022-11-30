import React, { useEffect, useState, useRef } from "react";

import "./Carousel.css";

function Carousel(props) {
  const { children } = props;
  const [activeDot, setActiveDot] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);
  const ref = useRef(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1);
      setActiveDot(activeDot + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveDot(activeDot - 1);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touchDown = e.pageX || e.touches[0].pageX;
    setTouchPosition(touchDown);
    ref.current.classList.add("active");
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    
    if (touchDown === null) {
      return;
    }
    
    
    const currentTouch = e.pageX || e.touches[0].pageX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const dotsGenerator = () => {
    return [...Array(children.length)].map((e, i) => (
      <div
        className={activeDot === i ? "heroBannerDotActive" : "heroBannerDot"}
        onClick={() => {
          setActiveDot(i);
          setCurrentIndex(i);
        }}
      />
    ));
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-content-wrapper"
        onTouchStart={handleTouchStart}
        onMouseDown={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseMove={handleTouchMove}
        onMouseLeave={()=>ref.current.classList.remove("active")}
        onMouseUp={()=>ref.current.classList.remove("active")}
      >
        <div
          ref={ref}
          className="carousel-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <div className="heroBannerDotContainer">{dotsGenerator()}</div>
    </div>
  );
}

export default Carousel;
