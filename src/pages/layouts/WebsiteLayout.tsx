import React from 'react'
import CarouselCars from '../../components/CarouselCars'
import FeatureLuxury from '../../components/FeatureLuxury'
import HeaderTop from '../../components/HeaderTop'
import MachineFuture from '../../components/MachineFuture'
import MoreFuture from '../../components/MoreFuture'
import ProductNew from '../../components/ProductNew'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className='container'>
        <HeaderTop />
        <ProductNew />
        <MachineFuture />
        <CarouselCars />
        <MoreFuture />
        <FeatureLuxury />
    </div>
  )
}

export default WebsiteLayout