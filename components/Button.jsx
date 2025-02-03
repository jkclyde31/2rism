// components/Button.js
"use client"; // Mark this as a Client Component

import React from "react";

const Button = ({
  children,
  width = "auto",
  height = "auto",
  color = "bg-blue-500",
  textColor = "text-white",
  padding = "px-4 py-2",
  borderRadius = "rounded",
  hoverColor = "hover:bg-blue-600",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        ${width} ${height} ${color} ${textColor} ${padding} ${borderRadius} ${hoverColor}
        transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
   
    >
      {children}
    </button>
  );
};

export default Button;


{/*
example ==================================

 <Button
    width="w-48"
    height="h-[48px]"
    color="bg-green-500"
    hoverColor="hover:bg-green-600"
  >
  Click Me
  </Button> 


*/}

