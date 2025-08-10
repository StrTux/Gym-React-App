import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Main.css";
import bgImg from "./man-1282232.jpg";

const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="back relative min-h-screen flex flex-col justify-between text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 flex-1">
        <h1 className="open-sans  text-5xl font-extrabold mb-4 leading-tight">
          Elevate your <br /> workout
        </h1>
        <p className="max-w-lg text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <button className=  " open-sans bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-300 transition">
          Get Started
        </button>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-6">
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-black/90 grid grid-cols-2 md:grid-cols-4 text-center py-6">
        <div>
          <h2 className="text-2xl font-bold">5+</h2>
          <p className="text-sm text-gray-400">Years of Service</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">10+</h2>
          <p className="text-sm text-gray-400">Certified Trainers</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">786+</h2>
          <p className="text-sm text-gray-400">Happy Members</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">95%</h2>
          <p className="text-sm text-gray-400">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
