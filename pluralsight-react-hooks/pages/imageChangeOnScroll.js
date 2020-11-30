import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [currentDivId, setCurrentDivId] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);

  useEffect(() => {
    window.document.title = `# ${currentDivId}`;
  }, [currentDivId]);

  return (
    <div>
      <span>mouseEventCount: {mouseEventCount}</span>
      {[...Array(11).keys()]
        .map((i) => i + 1)
        .map((id) => {
          return (
            <div
              key={id}
              onMouseOver={() => {
                setCurrentDivId(id);
                setMouseEventCount(mouseEventCount + 1);
              }}
            >
              <ImageToggleOnScroll
                primaryImage={`static/bw/rtf-${id}.jpg`}
                secondaryImage={`static/rtf-${id}.jpg`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ImageChangeOnScroll;
