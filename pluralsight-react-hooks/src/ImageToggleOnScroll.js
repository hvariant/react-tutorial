import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg, alt, index }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    setInView(isInView());
  }, [index]);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={
        isLoading
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt={alt === null ? '' : alt}
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default ImageToggleOnScroll;
