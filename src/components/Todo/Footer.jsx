import React from "react";
import { useSelector } from "react-redux";
import { StyledFooter, OverlappedNote } from "../../styles.js";

const Footer = () => {
  const counter = useSelector((todos) => todos.length);

  if (!counter) {
    return null;
  }

  return (
    <>
      <StyledFooter>{counter} items left</StyledFooter>
      <OverlappedNote width="1rem" />
      <OverlappedNote width="2rem" />
    </>
  );
};

export default Footer;
