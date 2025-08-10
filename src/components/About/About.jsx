    import React from 'react';
    import './About.css';
    import { FaDumbbell, FaUserShield, FaHeartbeat, FaRunning } from 'react-icons/fa';

    const About = () => {
        return (
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="montserrat text-4xl font-bold text-center text-[#4b4949] mb-4 fade-in fade-in-delayed">
                        Why Choose Us
                    </h2>
                    <p className="text-center text-gray-700 mb-12 fade-in fade-in-delayed max-w-2xl mx-auto">
                        At Olympia Gym, we’re more than just a workout space — we’re a community.
                        With expert trainers, state-of-the-art equipment, and personalized programs,
                        we help you achieve your fitness goals faster and safer.
                    </p>

                    {/* Content grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left side - features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* 1 */}
                            <div className="flex items-center space-x-4">
                                <FaDumbbell size={36} className="text-red-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Top Equipment</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Train with the latest, high-quality machines for every muscle group.
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="flex items-center space-x-4">
                                <FaUserShield size={36} className="text-red-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Expert Trainers</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Professional guidance to help you reach your fitness goals safely.
                                    </p>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="flex items-center space-x-4">
                                <FaHeartbeat size={36} className="text-red-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Personalized Programs</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Tailored workout plans that match your lifestyle and needs.
                                    </p>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="flex items-center space-x-4">
                                <FaRunning size={36} className="text-red-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Fun & Engaging</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Group classes and challenges to keep you motivated.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - images */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://i.pinimg.com/736x/8a/8e/1d/8a8e1d8e91b3f8b0635a848c385f2ae4.jpg"
                                alt="Gym 1"
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <img
                                src="https://i.pinimg.com/736x/16/cb/cc/16cbcca9259d1c692c149192aa592f88.jpg"
                                alt="Gym 2"
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <img
                                src="https://i.pinimg.com/1200x/87/0f/db/870fdbc24f282fd469df9096aa2c1417.jpg"
                                alt="Gym 3"
                                className="rounded-lg shadow-lg w-full h-80 object-cover col-span-2"
                            />
                        </div>
                    </div>

                    {/* Coaches Section */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left - Images */}
                        <div className="flex md:col-span-2 gap-10">
                            <video
                                src="https://res.cloudinary.com/drwpjxlfs/video/upload/v1754839897/Move_avzbge.mp4"
                                className="rounded-lg shadow-lg w-[290px] h-[470px] object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <video
                                src="https://res.cloudinary.com/drwpjxlfs/video/upload/v1754839983/second_fq41l1.mp4"
                                className="rounded-lg shadow-lg w-[290px] h-[470px] object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>


                        {/* Right - Text */}
                        <div>
                            <p className="text-gray-500 mb-2">Are you looking for a mentor?</p>
                            <h3 className="text-3xl font-bold mb-4">Coaches</h3>
                            <p className="text-gray-600 mb-4">
                                Connect with experienced coaches who can guide you through your personal and professional growth journey.
                                Whether you need career advice, skill development, or life coaching, our mentors are here to help you succeed.
                            </p>
                            <button className="px-4 py-2 bg-black text-white rounded-[6px] shadow hover:bg-gray-100">
                                Explore More
                            </button>
                        </div>



                    {/* meet out  trainer  */}

            
                    
                    </div>
                </div>
            </section>
        );
    };

    export default About;
