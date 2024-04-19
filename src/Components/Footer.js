import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-black fixed bottom-0 left-0 right-0 z-10 flex justify-between items-center h-16 border-t-2 border-gray-200 shadow-md px-4 md:px-6 lg:px-8">
            <div className="hidden md:flex items-center">
                <ul className="flex">
                    <li className="px-4">
                        <a href="/privacy" className="hover:text-blue-900">Privacy Policy</a>
                    </li>
                    <li className="px-4">
                        <a href="/cookiepolicy" className="hover:text-blue-900">Cookie Policy</a>
                    </li>
                    <li className="px-4">
                        <a href="/contactus" className="hover:text-blue-900">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
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
