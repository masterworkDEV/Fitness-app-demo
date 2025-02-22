import React from "react";

const MenuBtn = () => {
  return (
    <button className="hamburger-btn">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 12H20M4 8H20M4 16H12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default MenuBtn;
