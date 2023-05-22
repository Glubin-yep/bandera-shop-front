import React, { useState, useEffect } from "react";
import totop from "./totop.png";
import "../../style.css";

function ToTopButton() {
    const [backToTop, setBackToTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 600) {
          setBackToTop(true);
        } else {
          setBackToTop(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const totopButton = document.querySelector('.totop');
  
      if (backToTop) {
        totopButton.classList.add('show');
      } else {
        totopButton.classList.remove('show');
      }
    }, [backToTop]);
  
    return (
      <div>
        <a href="#outerwears" className="totop-link">
          <img src={totop} alt="" className="totop" />
        </a>
      </div>
    );
  }

export default ToTopButton;
