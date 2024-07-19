import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event: MouseEvent | TouchEvent) => {
      if (event instanceof MouseEvent) {
        setPosition({ x: event.clientX, y: event.clientY });
      } else if (event instanceof TouchEvent) {
        setPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("touchstart", updatePosition);
    window.addEventListener("touchmove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("touchstart", updatePosition);
      window.removeEventListener("touchmove", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;