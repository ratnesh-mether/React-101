/**
 * ---------------Higher Order Component--------------------
 * Higher component take a component as an argument and return a new enhanced component.
 * It is used to reduce code redundancy.
 */

import React, { useState } from "react";

function withHover(WrappedComponent) {
  return function (props) {
    const [isHovered, setHovered] = useState(false);
    function handleMouseEnter() {
      setHovered(true);
    }
    function handleMouseLeave() {
      setHovered(false);
    }
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  };
}

const TextComponentOne = ({ text, isHovered }) => {
  return (
    <>
      <h1 style={{ color: isHovered ? "Red" : "black" }}>{text}</h1>
    </>
  );
};

const TextComponentTwo = ({ text, isHovered }) => {
  return <h1 style={{ color: isHovered ? "blue" : "black" }}>{text}</h1>;
};

const TextComponentOneWithHover = withHover(TextComponentOne);
const TextComponentTwoWithHover = withHover(TextComponentTwo);

export { TextComponentOneWithHover, TextComponentTwoWithHover };
