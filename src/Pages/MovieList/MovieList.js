import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsHovering } from "../../Redux/movieSlice";
import { NavLink } from "react-router-dom";

export default function MovieList({movie, index}) {
    let dispatch = useDispatch();
    let { isHovering } = useSelector(state => state.movieSlice);
  return (
    <div
      className="movie"
      key={index}
      onMouseEnter={() => {
        dispatch(setIsHovering(index));
      }}
      onMouseLeave={() => {
        dispatch(setIsHovering(-1));
      }}
    >
      <img
        alt="hinhAnh"
        src={movie.hinhAnh}
        className="imgMovie object-cover"
      />
      <div
        className={`rescriptionMovie space-x-2 ${
          isHovering === index ? "" : "hidden"
        }`}
      >
        <p className="nameMovie mb-2">{movie.tenPhim}</p>
        <NavLink className="px-2 py-1 rounded inline-block seeDetail" to={`/detail/${movie.maPhim}`}>
          SEE DETAIL
        </NavLink>
        <NavLink className="px-2 py-1 rounded inline-block buyTicket">
          BUY TICKET
        </NavLink>
      </div>
    </div>
  );
}
