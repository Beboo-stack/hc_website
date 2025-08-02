import React from 'react'
import { hotDeals } from '@/data'
import Image from 'next/image'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Page = () => {
    return (
        <div>
            {/* Hot Deals Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        🔥 Hot Deals
                    </h2>
                    <p className="text-xl text-gray-600">🎉 Discover the Best Offers</p>
                    <p className="text-lg text-gray-500 mt-2">
                        Check our current promotions and discounts across the mall.
                    </p>
                </div>

                <div className="space-y-12">
                    {hotDeals.map((deal) => (
                        <div key={deal.id} className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center mb-6">
                                <Image
                                    src={deal.logo}
                                    alt={`${deal.brandName} logo`}
                                    width={120}
                                    height={60}
                                    className="mr-6"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {deal.brandName}
                                    </h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                        <span>📍 {deal.floor}</span>
                                        <span>📞 {deal.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {deal.products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg p-4 shadow-md"
                                    >
                                        <div className="relative mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={300}
                                                height={200}
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                {product.discount}% OFF
                                            </div>
                                        </div>

                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {product.name}
                                        </h4>

                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-gray-400 line-through">
                                                EGP {product.originalPrice.toLocaleString()}
                                            </span>
                                            <span className="text-red-600 font-bold text-lg">
                                                EGP {product.discountedPrice.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            Valid until:{" "}
                                            {new Date(product.validUntil).toLocaleDateString()}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-4 mt-6">
                                {deal.instagram && (
                                    <a
                                        href={deal.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-600 hover:text-pink-700 font-medium"
                                    >
                                        <FaInstagram size={25} className="inline mr-1" />
                                    </a>
                                )}
                                {deal.facebook && (
                                    <a
                                        href={deal.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        <FaFacebook size={25} className="inline mr-1" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Page
