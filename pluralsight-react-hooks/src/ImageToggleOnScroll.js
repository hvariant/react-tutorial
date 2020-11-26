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

  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

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
      width="500"
      height="500"
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;