import React, { useState, useEffect, useCallback } from "react"; 
import styles from "./ToTheTop.module.css";

function ToTheTop({ targetDivId }) {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = useCallback(() => {
    const targetDiv = document.getElementById(targetDivId);
    if (targetDiv) {
      const { top } = targetDiv.getBoundingClientRect();
      setIsVisible(window.scrollY + top > 10);
    }
  }, [targetDivId]);

  const scrollToTop = () => {
    const targetDiv = document.getElementById(targetDivId);
    if (targetDiv) {

      // Smoothly scroll to the top of the div
      targetDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.topPageContainer}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.topPageButton}
        >
          <img src="./assets/Icons/arrow.png" alt="Top" />
        </button>
      )}
    </div>
  );
}

export default ToTheTop;
