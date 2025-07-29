import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

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
                                    src="/logo1.png"
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
                                Bulgari was founded in Rome in 1884 and quickly established a reputation for Italian
                                excellence with exquisite craftsmanship and magnificent creations. The history of
                                Bulgari is distinguished by the magnificence of large, exceptionally rare colored
                                gems, by the ability to harmonize the classical with the contemporary and by an
                                unmistakable creative sensibility that transcends time and passing trends.
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex  lg:justify-end">
                        <div className="bg-black/30 backdrop-blur-sm w-full lg:w-fit p-6 rounded-lg text-white text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
                                Contact :
                            </h3>
                            {data.phone && data.phone.length > 0 ? (
                                // Map over the phone numbers array
                                data.phone.map((phoneNumber, index) => (
                                    <div className="flex items-center justify-center lg:justify-start space-x-3" key={index}>
                                        <Phone className="w-5 h-5" />
                                        <span className="text-lg font-medium">{phoneNumber}</span>
                                    </div>
                                ))
                            ) : (
                                <p>No phone numbers available.</p>
                            )}

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
