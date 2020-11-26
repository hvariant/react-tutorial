import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImage="static/bw/return-to-forever.png"
        secondaryImage="static/return-to-forever.png"
      />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImage="static/bw/romantic-warrior.png"
        secondaryImage="static/romantic-warrior.png"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
