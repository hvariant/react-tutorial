import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [currentDivId, setCurrentDivId] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);
  useEffect(() => {
    window.document.title = `# ${currentDivId}`;
    console.log(`useEffect: setting title to ${currentDivId}`);
  }, [currentDivId]);
  return (
    <div>
      <span>mouseEventCount: {mouseEventCount}</span>
      {[...Array(5).keys()].map((id) => {
        return (
          <div
            key={id}
            onMouseOver={() => {
              setCurrentDivId(id);
              setMouseEventCount(mouseEventCount + 1);
              console.log(`onMouseOver:${id}`);
            }}
          >
            <ImageToggleOnScroll
              primaryImage="static/bw/return-to-forever.png"
              secondaryImage="static/return-to-forever.png"
            />
            <br />
            <ImageToggleOnScroll
              primaryImage="static/bw/romantic-warrior.png"
              secondaryImage="static/romantic-warrior.png"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
