import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-black fixed bottom-0 left-0 right-0 z-10 flex justify-between items-center h-16 border-t-2 border-gray-200 shadow-md px-4 md:px-6 lg:px-8">
            <div className="hidden md:flex items-center">
                <ul className="flex">
                    <li className="px-4">
                        <Link to="/privacy" className="hover:text-blue-900">Privacy Policy</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cookiepolicy" className="hover:text-blue-900">Cookie Policy</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactus" className="hover:text-blue-900">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
