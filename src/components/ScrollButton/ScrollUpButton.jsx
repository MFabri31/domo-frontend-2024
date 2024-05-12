import { useState, useEffect } from "react";
import "./ScrollUpButton.css";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const detectScroll = () =>
    window.scrollY >= 200 ? setIsVisible(true) : setIsVisible(false);

  const handleGoToTopPage = () => (document.documentElement.scrollTop = 0);

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scrollup-button" onClick={handleGoToTopPage}>
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
