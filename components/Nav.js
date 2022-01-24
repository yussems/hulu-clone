import React, { useRef } from "react";
import request from "../utils/request";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter()
  const scrolRef = useRef(null);
  const handleLeft = (e) => {
    scrolRef.current.scrollLeft -= 600 / 2;
  };
  const handleRight = (e) => {
    scrolRef.current.scrollLeft += 600 / 2;
    
  };
  
  return (
    <nav className="flex justify-center m-5">
      <button onClick={handleLeft}>
        <ChevronLeftIcon className="w-5 transition duration-100 transform hover:scale-125 hover:text-white" />
      </button>
      <div
        ref={scrolRef}
        className="flex m-10 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll over scrollbar-hide scroll-smooth overflow-y-hidden"
      >
        {Object.entries(request).map((item) => {
          const [key, { title, url }] = item;
          return (
            <h2
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <button onClick={handleRight}>
        <ChevronRightIcon className="w-5 transition duration-100 transform hover:scale-125 hover:text-white" />
      </button>
    </nav>
  );
}

export default Nav;
