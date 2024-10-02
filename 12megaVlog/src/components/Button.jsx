import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  hoverColor = "bg-blue-800",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${children} ${type} ${bgColor} ${hoverColor} ${hoverColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
