import React from "react";
import ThumNail from "./ThumNail";
import FlipMove from 'react-flip-move';

function Result({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((item) => (
        <ThumNail key={item.id} item={item} />
      ))}
    </FlipMove>
  );
}

export default Result;
