import React from "react";
import { Heart, Users, Cigarette, Shirt } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function MallPolicyPage() {
  const policies = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "No Pets Allowed",
      description:
        "For the safety and comfort of all visitors, pets are not permitted inside the mall (except service animals).",
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-500" />,
      title: "Respectful Dress Code Required",
      description:
        "Please dress appropriately when visiting our mall. We appreciate your consideration for other shoppers.",
    },
    {
      icon: <Cigarette className="w-8 h-8 text-orange-500" />,
      title: "Smoking Only in Designated Areas",
      description:
        "Smoking is prohibited inside the mall. Please use designated outdoor smoking areas only.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Children Are Under Parental Supervision",
      description:
        "Parents and guardians are responsible for supervising their children at all times while in the mall.",
    },
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
            By following these simple guidelines, you help us maintain a
            welcoming environment for everyone. We appreciate your understanding
            and look forward to providing you with an excellent shopping
            experience.
          </p>
        </div>
      </main>
    </div>
  );
}
