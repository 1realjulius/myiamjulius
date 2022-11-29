import { useState, useEffect } from "react";

export default function useWindowSize() {
  // var innerWidth: Window["innerWidth"] & typeof globalThis;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const getSize = () => {
    // let window: Window & typeof globalThis;
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [width, height];
}
