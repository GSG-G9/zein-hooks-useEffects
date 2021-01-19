import React, { useState } from "react";

const Axis = () => {
  const [AX, setAX] = useState(0);
  const [AY, setAY] = useState(0);

  document.onmousemove((e) => {
    setAX(e.clientX);
    setAY(e.clientY);
  });

  return (
    <div
      style={
        window.innerWidth > window.innerWidth / 2
          ? { backgroundColor: "tomato", width: "600px", height: "600px" }
          : { backgroundColor: "blue", width: "600px", height: "600px" }
      }
    >
      <p>
        I am now on X: {AX} and Y: {AY}
      </p>
    </div>
  );
};

export default Axis;
