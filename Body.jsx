import React, { useState } from 'react';
import { FaVideo, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Body = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    const handleClick = () => {
        setIsAnimated(!isAnimated);
    };

    return (
        <div className="py-16">
            <div className="flex flex-col md:flex-row items-center mb-12">
                <img
                    src="/assets/main.png"
                    alt="Main"
                    className={`mb-8 md:mb-0 md:mr-8 cursor-pointer transition-transform duration-500 ${isAnimated ? 'transform scale-110' : ''}`}
                    onClick={handleClick}
                />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Live Streaming</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Your Gateway to Seamless Streaming and Video <br />
                        Content. Effortlessly stream video content from any source.
                        <br />
                        Stream from anywhere.
                    </p>
                </div>
                <div className="text-center md:text-left m-auto w-1/3">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">How it works??</h1>
                    <h2 className="font-bold">1. Input Your URL:</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Paste your stream URL into our user-friendly interface.
                    </p>
                    <h2 className="font-bold"> 2. Customize Your Experience:</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Adjust player settings to match your brand and preferences.
                    </p>
                    <h2 className="font-bold">3. Start Streaming:</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Go live with just a click and share your stream with your audience.
                    </p>
                </div>
            </div>

            <div className="transparent py-12">
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    <div className="bg-white rounded-lg p-6 shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <FaVideo size={40} className="text-red-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2 text-center">Seamless Streaming</h3>
                        <p className="text-gray-600 text-center">Effortlessly stream video content from any source.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <FaUsers size={40} className="text-red-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2 text-center">Video Conferencing</h3>
                        <p className="text-gray-600 text-center">Do video conferencing with encrypted rooms for secure conversations.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <FaShieldAlt size={40} className="text-red-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2 text-center">Secure Streaming</h3>
                        <p className="text-gray-600 text-center">Ensure your audience gets the best and most secure viewing experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
