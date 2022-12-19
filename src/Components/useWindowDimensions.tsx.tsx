import { useEffect, useState } from "react";

// window 의 width 값을 추적
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions;
