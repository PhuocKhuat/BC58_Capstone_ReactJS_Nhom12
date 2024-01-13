import React from 'react'
import "./style.css";
import MultipleSlick from '../MovieList/MultipleSlick';
import TabMovie from './TabMovie/TabMovie';
import Carousel from './Carousel/Carousel';

export default function HomePage() {
  return (
    <div style={{backgroundColor: "#fdfcf0"}}>
      <Carousel/>
      <div className="ms-96 titleMovieList">
        <h1 className="ms-48 pb-9" style={{position: "relative", top: "22px"}}>MOVIE SELECTION</h1>
      </div>
      <MultipleSlick/>
      <div className="ms-96 titleMovieList">
        <h1 className="ms-48 pb-7" style={{position: "relative", top: "14px"}}>CINEMA SYSTEM</h1>
      </div>
      <TabMovie/>
    </div>
  )
}
