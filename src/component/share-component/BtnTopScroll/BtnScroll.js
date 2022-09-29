import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled >= 480) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button style={{ display: visible ? "inline" : "none" }}>
      <FaArrowCircleUp onClick={scrollToTop} />
    </Button>
  );
};

export default ScrollButton;
