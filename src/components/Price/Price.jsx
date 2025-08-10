import { useState } from 'react';
import { FaCheck, FaInstagram } from 'react-icons/fa';
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";

const Price = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const socialLinks = [
    {
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/strtux/",
      name: "Instagram"
    }
  ];

  return (
    <div id='Price'  className="min-h-screen bg-white py-16 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-black mb-2">Membership Plans</h2>
        <p className="text-gray-700">Choose a plan and start training today</p>
      </div>

      {/* Pricing Cards - reduced gap-2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Basic Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-[2.5rem] hover:border-gray-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-black mb-2">Basic</h3>
              <p className="text-gray-700 text-sm">Gym access during staffed hours</p>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-semibold text-black">$29/month</div>
              <div className="text-sm text-gray-700">Cancel anytime</div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Full gym access
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Cardio & strength machines
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Locker rooms & showers
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaCheck className="text-gray-500 text-xs" />
                <span className="line-through">Group classes</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaCheck className="text-gray-500 text-xs" />
                <span className="line-through">24/7 access</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaCheck className="text-gray-500 text-xs" />
                <span className="line-through">Personal trainer</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={handleContactClick}
            className="w-full mt-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Join Now
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-[2.5rem] hover:border-gray-400 transition-colors relative flex flex-col justify-between">
          <div className="absolute -top-3 right-4 bg-blue-500/80 px-3 py-1 rounded-full">
            <span className="text-white text-xs font-medium">Popular</span>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-black mb-2">Pro</h3>
              <p className="text-gray-700 text-sm">All-day access + group classes</p>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-semibold text-black">$49/month</div>
              <div className="text-sm text-gray-700">Best for regular training</div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                24/7 gym access
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Unlimited group classes
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Free fitness assessment
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Sauna access
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Locker + towel service
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaCheck className="text-gray-500 text-xs" />
                <span className="line-through">Personal trainer sessions</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={handleContactClick}
            className="w-full mt-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Start Free Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-[2.5rem] hover:border-gray-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-black mb-2">Elite</h3>
              <p className="text-gray-700 text-sm">Personal training included</p>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-semibold text-black">$79/month</div>
              <div className="text-sm text-gray-700">Save with annual plan</div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                24/7 gym access
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Unlimited group classes
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                4 personal trainer sessions/month
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Nutrition guidance
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Sauna + pool access
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheck className="text-gray-700 text-xs" />
                Priority support
              </li>
            </ul>
          </div>

          <button 
            onClick={handleContactClick}
            className="w-full mt-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Join Elite
          </button>
        </div>
      </div>

      {/* Get Started Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        className="bg-transparent"
        size="sm"
        classNames={{
          base: "w-full max-w-md",
          body: "p-0",
        }}
      >
        <ModalContent className="w-auto">
          <ModalBody className="bg-white text-black p-[2.5rem] rounded-lg border border-blue-400">
            <div className="flex flex-col items-center gap-[2.5rem]">
              <h3 className="text-xl font-semibold">Start Your Membership</h3>
              
              <div className="flex gap-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-black hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>

              <p className="text-sm text-gray-700 text-center mt-2">Message us to book a free gym tour or start your trial.</p>

              <Button
                className="bg-blue-600 text-white px-6 py-2 rounded-md mt-2"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <button
          onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg mx-auto"
        >
          Book a Free Trial
        </button>
      </div>
    </div>
  );
};

export default Price;
