import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-xl"
          />
        </div>
        <h3
          className={`text-lg md:text-xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.title}
        </h3>
        <p className="text-sm md:text-md">{props.overview}</p>
      </div>
    </Link>
  );
  // return <div>{props.original_title}</div>;
};
export default Poster;
