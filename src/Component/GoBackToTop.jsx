import GotoTop from '../assets/Images/up-arrow.png'
import React, { useState, useEffect } from "react";

function GoBackToTop(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return(<>
        <div className="Go_To_Top" style={{ display: isVisible ? "flex" : "none" }}>
      <a onClick={scrollToTop} id="myBtn">
        <img src={GotoTop} alt="Go to Top" />
      </a>
    </div>
  </>)
}

export default GoBackToTop;