import React from "react";

function Slide({ title, text }) {
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </>
  );
}

export default Slide;
