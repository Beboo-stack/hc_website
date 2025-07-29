import React from 'react'
import ShopStructure from '@/components/shop_structure'
import { shops } from '@/shops'

const Page = () => {
  return (
    <div>
      <ShopStructure data={shops[43]}/>
    </div>
  )
}

export default Page
