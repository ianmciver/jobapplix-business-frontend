import React from "react";

export default function Chevron(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 13.304 22.365"
      onClick={props.onClick && props.onClick}
      stroke={props.color}
    >
      <path
        d="M1817.158,2473.672l-10.122,10.122,8.435,8.436,1.687,1.687"
        transform="translate(1818.219 2494.977) rotate(180)"
        fill="none"
        strokeWidth="3"
      />
    </svg>
  );
}
