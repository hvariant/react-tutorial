import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  const scrollHandler = () => {
    setInView(isInView());
  };

  const [isLoading, setIsLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setInView(isInView());
    setIsLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const transparentGif =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  return (
    <img
      src={isLoading ? transparentGif : inView ? secondaryImage : primaryImage}
      width="300"
      height="300"
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
