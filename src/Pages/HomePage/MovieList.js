import React, { useEffect } from "react";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "../../Redux/movieSlice";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { GP02 } from "../../Settings/config";

export default function MovieList() {
  let dispatch = useDispatch();
  let { movieList } = useSelector((state) => state.movieSlice);
  console.log("🚀 ~ file: MovieList.js:9 ~ MovieList ~ MovieList:", movieList);
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GP02}`)
      .then((res) => {
        console.log(res);
        dispatch(setMovieList(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderMovieList = () =>
    movieList.map((movie) => (
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="hinhAnh"
            src={movie.hinhAnh}
            className="imgMovie object-cover"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    ));
  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container">
      {renderMovieList()}
    </div>
  );
}
