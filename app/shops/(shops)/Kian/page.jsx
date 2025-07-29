import React from 'react'
import ShopStructure from '@/components/shop_structure'
import { shops } from '@/shops'

const Page = () => {
  return (
    <div>
      <ShopStructure data={shops[28]}/>
    </div>
  )
}

export default Page
