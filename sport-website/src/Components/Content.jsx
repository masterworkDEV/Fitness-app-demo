import React from "react";

const Content = () => {
  return (
    <div className="content">
      <h1 className="title">
        Train Hard,
        <br />
        Play Hard
      </h1>
      <p>
        Details of different plans monthly(Monthly,Yearly,
        <br />
        Family,Etc...)
      </p>
      <div className="btns">
        <button>Join Now</button>
        <button className="play-demo">
          <svg
            viewBox="0 0 24 24"
            fill="white"
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
                opacity="1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              ></path>{" "}
              <path
                d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z"
                fill="#c5411e"
              ></path>{" "}
            </g>
          </svg>
          <span>Play Demo...</span>
        </button>
      </div>
    </div>
  );
};

export default Content;
