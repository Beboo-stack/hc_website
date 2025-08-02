import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const ShopStructure = ({ data }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100">
            {/* Breadcrumb Navigation */}
            <nav className="px-6 py-4 text-white">
                <div className="flex justify-between items-center">
                    {/* Left: Breadcrumb */}
                    <div className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span>›</span>
                        <Link href="/shops" className="hover:underline">
                            Shops
                        </Link>
                        <span>›</span>
                        <span className="font-medium">{data.name}</span>
                    </div>

                    {/* Right: Floor Location */}
                    <div className="flex items-center space-x-2 text-sm text-primary">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg font-medium">{data.floor}</span>
                    </div>
                </div>
            </nav>


            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Brand Logo */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-md">
                            <div className="relative w-full h-48">
                                <Image
                                    src={data.logo}
                                    alt="Brand Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>


                </div>

                {/* Bottom Content - Description and Contact */}
                <div className="mt-16  grid lg:grid-cols-3 gap-8">

                    {/* Brand Description */}
                    <div className="lg:col-span-2">
                        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg text-white">
                            <p className="text-lg leading-relaxed">
                                HC Furniture Mall hosts over 55 premium furniture and home decor stores under one roof.
                                From luxury living room sets to functional kitchens, cozy bedrooms, and stylish accessories — there's something for every style and budget.
                                The shops feature both international and local brands, offering a wide variety of products and price points.
                                Whether you're furnishing a new home or upgrading a single room, HC is your all-in-one destination.
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex lg:justify-end">
                        <div className="bg-black/30 backdrop-blur-sm w-full lg:w-fit p-6 rounded-lg text-white text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
                                Contact :
                            </h3>

                            {/* Phone numbers */}
                            {data.phone && data.phone.length > 0 ? (
                                data.phone.map((phoneNumber, index) => (
                                    <div className="flex items-center justify-center lg:justify-start space-x-3" key={index}>
                                        <Phone className="w-5 h-5" />
                                        <span className="text-lg font-medium">{phoneNumber}</span>
                                    </div>
                                ))
                            ) : (
                                <p>No phone numbers available.</p>
                            )}

                            {/* Social Media Icons */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 ">
                                {data.facebook && (
                                    <Link href={data.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                                        <Facebook size={32} />
                                    </Link>
                                )}
                                {data.instagram && (
                                    <Link href={data.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                                        <Instagram size={32} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ShopStructure;


// export const metadata = {
//   title: 'Bulgari - Luxury Jewelry Collection',
//   description: 'Discover Bulgari\'s exquisite Italian craftsmanship and magnificent jewelry creations featuring rare colored gems.',
// };
