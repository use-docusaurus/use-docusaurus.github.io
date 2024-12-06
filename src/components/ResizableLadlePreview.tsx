"use client";

import React, { useState, useRef } from "react";

const ResizableLadlePreview = ({ story, initialWidth = 800 }) => {
  const [width, setWidth] = useState(initialWidth);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const startWidth = useRef(width);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    startWidth.current = width;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartX.current;
      const newWidth = Math.max(320, startWidth.current + deltaX); // 320px as minimum width
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative" style={{ width: `${width}px` }}>
      <iframe
        src={`/ladle/?mode=preview&story=${story}`}
        className="w-full border border-gray-200 rounded-l"
        height="400"
      />
      <div
        className={`absolute top-0 right-0 w-2 h-full bg-gray-100 border-y border-r border-gray-200 rounded-r cursor-ew-resize hover:bg-gray-200 flex items-center justify-center ${
          isDragging ? "bg-gray-300" : ""
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="h-8 w-1 bg-gray-300 rounded-full" />
      </div>
      <div className="absolute top-4 right-4 bg-white px-2 py-1 text-sm text-gray-500 rounded border">
        {Math.round(width)}px
      </div>
    </div>
  );
};

export default ResizableLadlePreview;
