"use client";

import { useEffect, useState } from "react";
import "./index.css";

export const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX: x, clientY: y } = event;
      setCursorPos({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="circle-cursor"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
    ></div>
  );
};
