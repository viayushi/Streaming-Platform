import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const scrollToFooter = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, // Scroll to the end of the document
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

    return (
        <>
            <div className="flex justify-between items-center p-4">
                <div className="hidden lg:flex flex-col justify-center items-center font-lato gap-2">
                    <nav className="-mt-10">
                        <img src="./assets/logo.svg" className="w-26 h-16" alt="Logo" />
                        <h1 className="text-red-700 font-bold px-1">LETS STREAM</h1>
                    </nav>
                </div>
                <div className="lg:flex justify-center items-center gap-6">
                    <button id="strt" className="rounded-md px-4 py-3 bg-gradient-to-l from-red-600 to-red-500 hover:bg-blue-600 text-white -mt-10" onClick={scrollToFooter}>
                        GET STARTED
                    </button>
                </div>
                <div className="lg:hidden">
                    <FaBars size={24} />
                </div>
            </div>
            <main>
                <div className="h-100 w-2/3 mx-auto text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mt-10">Your Gateway to Seamless Streaming and Video Content</h1>
                    <br/>
                    <p className="mt-4 text-lg text-gray-600">StreamLink empowers you to effortlessly stream video content from any source with ease. Whether you're broadcasting live events, webinars, or sharing educational content, StreamLink simplifies the process, ensuring your audience gets the best viewing experience.</p>
                    <button className="rounded-md mt-5 px-3 py-2 bg-gradient-to-l from-red-600 to-red-500 hover:bg-blue-600 text-white gap-3" onClick={scrollToFooter}>
                        GET STARTED
                    </button>
                </div>
            </main>
        </>
    );
};

export default Header;
