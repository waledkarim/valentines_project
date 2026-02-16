import "./ValentineContainer.css";
import { motion } from "motion/react";
import { useState } from "react";

function ValentineContainer() {
  const [position, setPosition] = useState({ top: "", left: "" });
  const shouldSetAbsolute = !!position.top;
  const moveButton = () => {
    // iPhone X screen size: 375px x 812px
    const paddingInline = 100;
    const paddingBlock = 300;
    const maxWidth = window.visualViewport.width - paddingInline;
    const maxHeight = window.visualViewport.height - paddingBlock;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    setPosition({
      top: `${randomY}px`,
      left: `${randomX}px`,
    });
  };

  return (
    <div className="container">
      <h1 className="text">Orpi, Will You be My Love?</h1>
      <div className="buttons">
        <button className="yes">Yes</button>
        <button
          style={
            shouldSetAbsolute
              ? {
                  position: "fixed",
                  top: position.top,
                  left: position.left,
                }
              : { position: "relative" }
          }
          className="no"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ValentineContainer;
