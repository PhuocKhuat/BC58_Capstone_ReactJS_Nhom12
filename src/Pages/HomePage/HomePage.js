import React from 'react'
import "./style.css";
import MultipleSlick from '../MovieList/MultipleSlick';
import TabMovie from './TabMovie/TabMovie';
import Carousel from './Carousel/MyCarousel';

export default function HomePage() {
  return (
    <div style={{backgroundColor: "#fdfcf0"}}>
      <Carousel/>
      <div className="titleMovie titleMList">
        <h1 className="moveSelection">MOVIE SELECTION</h1>
      </div>
      <MultipleSlick/>
      <div className="titleMovie titleTabMovie">
        <h1 className="cinemaSystem">CINEMA SYSTEM</h1>
      </div>
      <TabMovie/>
    </div>
  )
}
