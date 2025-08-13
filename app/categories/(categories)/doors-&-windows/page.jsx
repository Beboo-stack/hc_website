'use client'
import React from 'react'
import CategoryStructure from '@/components/category_structure'
import { mallCategories } from '@/data'

const Page = () => {
  return (
    <div>
      <CategoryStructure category={mallCategories[16]}/>
    </div>
  )
}

export default Page
