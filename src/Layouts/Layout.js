import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginSlick from '../Pages/LoginPage/LoginSlick'
import './style.css'

export default function Layout() {
  return (
    <div className='container layout layoutDNhap layoutDKy'>
        <Outlet/>
        <LoginSlick/>
    </div>
  )
}
