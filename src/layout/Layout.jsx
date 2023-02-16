import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/Navigation/Navigation'
import { SideBar } from '../components/SideBar/SideBar'
import './layout.scss'

export const Layout = () => {
  return (
    <div className='layout'>
      <Navigation />
      <div className='layout__body'>
        <SideBar />
        <div className='layout__children'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
