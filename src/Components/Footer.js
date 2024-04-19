import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-black fixed bottom-0 left-0 right-0 z-10 flex flex-col md:flex-row justify-between items-center h-16 border-t-2 border-gray-200 shadow-md px-4 md:px-6 lg:px-8">
            <div className="flex items-center md:justify-center md:mx-auto md:max-w-6xl">
                <span className="text-gray-600 mr-4">Follow us:</span>
                <IconContext.Provider value={{ size: "1.5em", className: "mr-4" }}>
                    <a href="https://www.facebook.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: "#1877f2" }} /></a>
                    <a href="https://twitter.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: "#1da1f2" }} /></a>
                    <a href="https://www.instagram.com/immunnapandit/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: "#c13584" }} /></a>
                    <a href="https://www.snapchat.com/@immunnapandit" target="_blank" rel="noopener noreferrer"><FaSnapchat style={{ color: "#fffc00" }} /></a>
                    <a href="https://www.youtube.com/@technicalmunnapandit/" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ color: "#ff0000" }} /></a>
                    <a href="https://medium.com/@immunnapandit/" target="_blank" rel="noopener noreferrer"><FaMedium style={{ color: "#12100e" }} /></a>
                </IconContext.Provider>
            </div>
        </footer>
    );
};

export default Footer;
