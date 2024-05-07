import React from 'react';
import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-black fixed bottom-0 left-0 right-0 z-10 flex flex-col md:flex-row justify-between items-center h-16 border-t-2 border-gray-200 shadow-md px-4 md:px-6 lg:px-8 text-sm font-sans mt-8">
            <div className="flex items-center md:justify-center md:mx-auto md:max-w-6xl">
                <span className="text-gray-600 mr-4">Follow us:</span>
                <IconContext.Provider value={{ size: "1.5em", className: "mr-4 flex-shrink-0" }}>
                    <a href="https://www.facebook.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-500 hover:text-blue-700" /></a>
                    <a href="https://twitter.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400 hover:text-blue-600" /></a>
                    <a href="https://www.instagram.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-500 hover:text-pink-700" /></a>
                    <a href="https://www.snapchat.com/@immunnapandit" target="_blank" rel="noopener noreferrer"><FaSnapchat className="text-yellow-400 hover:text-yellow-600" /></a>
                    <a href="https://www.youtube.com/@technicalmunnapandit/" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-600 hover:text-red-800" /></a>
                    <a href="https://medium.com/@immunnapandit/" target="_blank" rel="noopener noreferrer"><FaMedium className="text-gray-800 hover:text-gray-900" /></a>
                </IconContext.Provider>
            </div>
        </footer>
    );
};

export default Footer;
