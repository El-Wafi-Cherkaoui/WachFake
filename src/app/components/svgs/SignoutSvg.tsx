"use client"
import React from "react";

export interface SvgProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function SignoutSvg({ width = "64px", height = "auto", color = "currentColor"} : SvgProps){
  return (
    <svg

      width={width}
      height={height}
      viewBox="-2 2 30 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <path d="M17,2H7C5.3,2,4,3.3,4,5v6h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H4v6c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V5C20,3.3,18.7,2,17,2z" />
    </svg>
  );
};
