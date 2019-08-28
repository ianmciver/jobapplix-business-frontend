import React from "react";
const lineStyle = {
  fill: "#fff",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2px"
};
export default props => (
  <svg viewBox="0 0 48 48" style={{ width: props.width, height: props.height }}>
    <line style={lineStyle} x1="1" x2="47" y1="47" y2="1" />
    <line style={lineStyle} x1="1" x2="47" y1="1" y2="47" />
  </svg>
);
