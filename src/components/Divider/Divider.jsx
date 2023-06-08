import React from "react";
import "./Divider.scss";

const Divider = ({ vertical, color }) => {
  const className = `divider${vertical ? " vertical" : ""}`;
  const style = { backgroundColor: color };

  return <div className={className} style={style} />;
};

export default Divider;
