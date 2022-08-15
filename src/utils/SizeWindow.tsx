import { useState, useEffect } from "react";

type WindowSize = {
  width?: number;
  height?: number;
};

export const useSizeWindow = () => {
  const [sizeWindow, setSizeWindow] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizeWindow;
};
