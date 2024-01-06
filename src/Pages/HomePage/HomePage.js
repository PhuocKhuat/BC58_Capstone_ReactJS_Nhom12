import React from 'react'
import "./style.css";
import MultipleSlick from './MultipleSlick';

export default function HomePage() {
  return (
    <div style={{backgroundColor: "#fdfcf0"}}>
      <div className="ms-96">
        <img alt="" className="ms-48 pb-20" style={{position: "relative", top: "48px"}} src="/h3_movie_selection.gif"/>
      </div>
      <MultipleSlick/>
    </div>
  )
}
