import React from "react";

const Card = ({ children, color = "bg-gray-100" }) => {
  return <div className={`${color} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
