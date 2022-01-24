import React from "react";
import request from "../utils/request";

function Nav() {
  const handleLeft = (e) => {
    
  }
  const handleRight = (e) => {
    
  }
  return (
    <nav className="flex justify-center m-10">
      <button onClick={handleLeft}>se</button>
      <div className="flex m-10 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll over scrollbar-hide overflow-y-hidden overflow-auto">
        {Object.entries(request).map((item) => {
          const [key, { title, url }] = item;
          return (
            <h2
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <button  onClick={handleRight}>se</button>

    </nav>
  );
}

export default Nav;
