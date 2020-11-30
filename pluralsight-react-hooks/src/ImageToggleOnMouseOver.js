import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImage;
      }}
      src={primaryImage}
      width="500"
      height="500"
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
