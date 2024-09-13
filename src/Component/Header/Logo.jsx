import React from "react";

function Logo({ toogleMenuHandler }) {
  return (
    <div className="flex items-center justify-start col-span-1">
      <div
        className="m-3 text-3xl cursor-pointer hover:bg-gray-100"
        onClick={toogleMenuHandler}
      >
        <svg
          className=""
          xmlns="http://www.w3.urg/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
      </div>
      <img
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        alt="logo"
        className="h-16 mx-3"
      />
    </div>
  );
}

export default Logo;
