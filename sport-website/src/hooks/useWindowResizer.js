import { useState, useEffect } from "react";

const useWindowResizer = () => {
  const { windowSize, setWindowSize } = useState({ width: null, height: null });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowResizer;
