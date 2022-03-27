import React from 'react'
import CarouselCars from '../../components/CarouselCars'
import HeaderTop from '../../components/HeaderTop'
import MachineFuture from '../../components/MachineFuture'
import ProductNew from '../../components/ProductNew'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className='container'>
        <HeaderTop />
        <ProductNew />
        <MachineFuture />
        <CarouselCars />
    </div>
  )
}

export default WebsiteLayout