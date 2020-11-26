import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  const scrollHandler = () => {
    setInView(isInView());
  };

  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <img
      src={inView ? secondaryImage : primaryImage}
      width="500"
      height="500"
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
