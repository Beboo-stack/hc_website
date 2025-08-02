import React from 'react';
import { Heart, Users, Cigarette, Shirt } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function MallPolicyPage() {
    const policies = [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "No Pets Allowed",
            description: "For the safety and comfort of all visitors, pets are not permitted inside the mall (except service animals)."
        },
        {
            icon: <Shirt className="w-8 h-8 text-blue-500" />,
            title: "Respectful Dress Code Required",
            description: "Please dress appropriately when visiting our mall. We appreciate your consideration for other shoppers."
        },
        {
            icon: <Cigarette className="w-8 h-8 text-orange-500" />,
            title: "Smoking Only in Designated Areas",
            description: "Smoking is prohibited inside the mall. Please use designated outdoor smoking areas only."
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            title: "Children Are Under Parental Supervision",
            description: "Parents and guardians are responsible for supervising their children at all times while in the mall."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">📜</div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Mall Policy</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        To ensure a pleasant and safe experience for all visitors
                    </p>
                </div>

                {/* Policy Cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {policies.map((policy, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 bg-gray-50 rounded-full p-3">
                                    {policy.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        {policy.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {policy.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Thank You Section */}
                <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
                    <div className="text-4xl mb-4">🙏</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Thank You for Your Cooperation
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        By following these simple guidelines, you help us maintain a welcoming
                        environment for everyone. We appreciate your understanding and look forward
                        to providing you with an excellent shopping experience.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-xl shadow-md p-8 inline-block max-w-2xl">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Questions or Concerns?
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Please contact our HC Furniture Mall team
                        </p>

                        {/* Contact Details */}
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            {/* Left Column */}
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="mr-2">📞</span>
                                    <span>01281100001</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="mr-2">🌐</span>
                                    <span>www.hcfurnituremall.com</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="mr-2">📍</span>
                                    <span className="text-center md:text-left">Mall of Arabia - Gate 1, Juhayna Sq., 6th of October, Egypt</span>
                                </div>
                            </div>

                            {/* Right Column - Business Hours */}
                            <div className="space-y-2 text-gray-600">
                                <div className="font-medium text-gray-700 mb-3">🕒 Business Hours:</div>
                                <div>Monday - Thursday: 10:00 AM - 10:00 PM</div>
                                <div>Friday: 10:00 AM - 11:00 PM</div>
                                <div>Saturday: 10:00 AM - 11:00 PM</div>
                                <div>Sunday: 10:00 AM - 10:00 PM</div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-gray-600 mb-3">Follow us on social media:</p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://www.facebook.com/HCFurnitureMall/?eid=ARDi4rPTxlXxiH7LU5X5FbKjmzefHp0aI3kl1unAZtHkWdqbuoQQ_HRIYIlPOJlHeWrBPl7aQZZmzqzb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-x-2"
                                >
                                    <FaFacebook /> <div>Facebook</div>
                                </a>
                                <a
                                    href="https://www.instagram.com/hc_furniture_mall/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-600 hover:text-pink-700 transition-colors flex items-center gap-x-2"
                                >
                                    <FaInstagram /> <div>Instagram</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}