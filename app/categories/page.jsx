import React from 'react'
import { mallCategories } from "@/data";
import CategoryCard from '@/components/CategoryCard';

const Page = () => {
  return (

    <div className="min-h-screen flex flex-col pt-5">

      {/* Main Content - 90% of viewport height */}
      <main className="flex-1 overflow-y-auto ">
        {/* Rest of your content remains the same */}
        <div className="container mx-auto px-5 md:p py-2 space-y-4">
          {/* Section*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">🗂️   Categories</h2>
            <hr className="mb-10" />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mallCategories.map((category, index) => (
                <CategoryCard category={category} key={index}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}

export default Page
