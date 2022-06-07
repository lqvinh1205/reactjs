import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/customer/Footer/Footer'
import HeaderTop from '../components/customer/HeaderTop/HeaderTop'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className='bg-dark'>
        <HeaderTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default WebsiteLayout