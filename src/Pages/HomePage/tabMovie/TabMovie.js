import React from 'react'
import { useMediaQuery } from 'react-responsive'
import TabMovieMobile from './TabMovieMobile'
import TMovieDeskTab from './TMovieDeskTab'

export default function TabMovie() {
  const DesktopAndTablet = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 640 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 639.98 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 640 })
    return isNotMobile ? children : null
  }
  return (
    <div className='overflow-hidden'>
      <DesktopAndTablet>
        <TMovieDeskTab/>
      </DesktopAndTablet>
      <Mobile>
        <TabMovieMobile/>
      </Mobile>
    </div>
  )
}
