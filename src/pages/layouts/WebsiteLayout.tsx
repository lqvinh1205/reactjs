import React from 'react'
import HeaderTop from '../../components/HeaderTop'
import ProductNew from '../../components/ProductNew'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className='container'>
        <HeaderTop />
        <ProductNew />
    </div>
  )
}

export default WebsiteLayout