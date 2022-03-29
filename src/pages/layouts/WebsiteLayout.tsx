import React from 'react'
import BannerBottom from '../../components/BannerBottom'
import CarouselCars from '../../components/CarouselCars'
import FeatureLuxury from '../../components/FeatureLuxury'
import Footer from '../../components/Footer'
import HeaderTop from '../../components/HeaderTop'
import ListBrand from '../../components/ListBrand'
import MachineFuture from '../../components/MachineFuture'
import MoreFuture from '../../components/MoreFuture'
import ProductNew from '../../components/ProductNew'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className=''>
        <HeaderTop />
        <ProductNew />
        <MachineFuture />
        <CarouselCars />
        <MoreFuture />
        <FeatureLuxury />
        <BannerBottom />
        <ListBrand />
        <Footer />
    </div>
  )
}

export default WebsiteLayout