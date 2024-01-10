import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <div style={{width: "100vw", height: "100vh", backgroundColor: "black", position:"fixed", top: 0, left:0}} className='flex justify-center items-center z-10'>
        <ClipLoader size={50} color="#d6b13d" />
    </div>
  )
}
