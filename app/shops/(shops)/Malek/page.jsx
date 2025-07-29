import React from 'react'
import ShopStructure from '@/components/shop_structure'
import { shops } from '@/shops'

const Page = () => {
  return (
    <div>
      <ShopStructure data={shops[25]}/>
    </div>
  )
}

export default Page
