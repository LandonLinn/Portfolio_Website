import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableDiv = document.getElementById("bodyContainer");
    if (scrollableDiv) {
      scrollableDiv.scrollTo({
        top: 0,
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
